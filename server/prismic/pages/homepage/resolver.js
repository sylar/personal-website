const Fetcher = require('../../Fetcher')
const {HOMEPAGE} = require('../../constants')
const handler = require('./handler')
const query = require('./query')

const resolver = () =>
  Fetcher.getPagePayload({
    page: HOMEPAGE,
    pageType: HOMEPAGE,
    query,
    handler
  })

module.exports = resolver
