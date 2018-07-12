const Prismic = require('prismic-javascript')
const {PRISMIC_API} = require('../constants')
const {resume} = require('./pages')

const getPagePayload = async ({page = 'resume', pageType = 'resume', query = resume.query}) => {
  const api = await Prismic.api(PRISMIC_API)
  // Prismic's fault :(
  // eslint-disable-next-line
  const {data, last_publication_date} = await api.getByUID(
    pageType,
    page,
    {graphQuery: query}
  )

  return {
    lastUpdate: last_publication_date,
    data: resume.handler(data)
  }
}

module.exports = {
  getPagePayload
}
