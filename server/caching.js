const LRUCache = require('lru-cache')
const fetch = require('isomorphic-unfetch')
const getConfig = require('next/config').default
const {
  serverRuntimeConfig: {
    CLOUDFLARE_EMAIL,
    CLOUDFLARE_ZONE_ID,
    CLOUDFLARE_GLOBAL_KEY
  }
} = getConfig()

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
})

function getCacheKey (req) {
  return `${req.url}`
}

async function clearCloudflare () {
  // curl -X POST https://api.cloudflare.com/client/v4/zones/''$CLOUDFLARE_ZONE_ID''/purge_cache -H 'X-Auth-Email: '$CLOUDFLARE_EMAIL'' -H 'X-Auth-Key: '$CLOUDFLARE_GLOBAL_KEY'' -H 'Content-Type: application/json' --data '{\"purge_everything\":true}
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/purge_cache`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Email': `${CLOUDFLARE_EMAIL}`,
        'X-Auth-Key': `${CLOUDFLARE_GLOBAL_KEY}`
      },
      body: JSON.stringify({purge_everything: true})
    }
  )

  console.log({cloudflarePurged: response})
}

function clearCache () {
  clearCloudflare()
  ssrCache.reset()

  console.log({
    ssrPurged: true
  })
}

async function renderAndCache ({req, res, app}) {
  const key = getCacheKey(req)
  const pagePath = req.originalUrl
  const queryParams = req.params
  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT')
    res.send(ssrCache.get(key))
    return
  }

  try {
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams)

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html)
      return
    }

    // Let's cache this page
    ssrCache.set(key, html)

    res.setHeader('x-cache', 'MISS')
    res.send(html)
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams)
  }
}

module.exports = {
  renderAndCache,
  clearCache
}
