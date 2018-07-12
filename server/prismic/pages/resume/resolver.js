const Fetcher = require('../../Fetcher')
const {RESUMEPAGE} = require('../../constants')
const handler = require('./handler')
const query = require('./query')

const resolver = () =>
  Fetcher.getPagePayload({
    page: RESUMEPAGE,
    pageType: RESUMEPAGE,
    query,
    handler
  })

module.exports = resolver
