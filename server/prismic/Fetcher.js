const Prismic = require('prismic-javascript')
const {PRISMIC_API} = require('../constants')
const prismicIds = require('./prismic-ids.json')
const PrismicDOM = require('prismic-dom')
const TurndownService = require('turndown')
const {noop} = require('lodash')

class Fetcher {
  constructor () {
    this.api = Prismic.api(PRISMIC_API)
  }

  getPageContent = async (page, pageType, query) => {
    // Prismic's fault :(
    // eslint-disable-next-line
    const {data, last_publication_date} = await this.api.getByUID(
      pageType,
      page,
      {graphQuery: query}
    )

    return {
      lastUpdate: last_publication_date,
      data
    }
  }
}

module.exports = Fetcher
