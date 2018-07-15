const Prismic = require('prismic-javascript')
const getConfig = require('next/config').default

// const {
//   serverRuntimeConfig: {PRISMIC_API_KEY},
//   publicRuntimeConfig: {PRISMIC_API}
// } = getConfig()

const getPagePayload = async ({page, pageType, query, handler}) => {
  const {
    publicRuntimeConfig: {PRISMIC_API},
    serverRuntimeConfig: {PRISMIC_API_KEY}
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
    lastUpdate: last_publication_date,
    ...handler(data)
  }
}

module.exports = {
  getPagePayload
}
