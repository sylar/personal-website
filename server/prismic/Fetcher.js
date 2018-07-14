const Prismic = require('prismic-javascript')
const {PRISMIC_API, PRISMIC_API_KEY} = process.env

const getPagePayload = async ({page, pageType, query, handler}) => {
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
