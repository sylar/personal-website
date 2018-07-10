const Prismic = require('prismic-javascript')
const pages = require('./pages')
const {PRISMIC_API} = require('../constants')

const getRawContent = ({page, pagePayload}) => {
  const mapper = pages[page].mapper(pagePayload)
  const out = {
    title: 'replace'
  }
}

class Fetcher {
  constructor () {
    this.api = Prismic.api(PRISMIC_API)
  }

  getPagePayload = async (page, pageType, query) => {
    // Prismic's fault :(
    // eslint-disable-next-line
    const {data, last_publication_date} = await this.api.getByUID(
      pageType,
      page,
      {graphQuery: pages[page].query}
    )

    return {
      lastUpdate: last_publication_date,
      data
    }
  }
}

module.exports = Fetcher
