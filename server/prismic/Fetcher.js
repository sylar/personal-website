const Prismic = require('prismic-javascript')
const getConfig = require('next/config').default

const getPagePayload = async ({page, pageType, query, handler}) => {
  const {
    serverRuntimeConfig: {PRISMIC_API_KEY, PRISMIC_API}
  } = getConfig()

  const api = await Prismic.api(PRISMIC_API, {
    accessToken: PRISMIC_API_KEY
  })

  // Prismic's fault :(
  // eslint-disable-next-line
  const {data, last_publication_date} = await api.getByUID(pageType, page, {
    graphQuery: query
  })
  return {
    lastUpdate: new Date(last_publication_date),
    ...handler(data)
  }
}

module.exports = {
  getPagePayload
}
