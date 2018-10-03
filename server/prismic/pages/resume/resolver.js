const Fetcher = require('../../Fetcher')
const {RESUMEPAGE, RESUMEPAGE_UID} = require('../../constants')
const handler = require('./handler')
const query = require('./query')
const resolver = (obj, args, ctx) => {
  return Fetcher.getPagePayload({
    page: RESUMEPAGE_UID,
    pageType: RESUMEPAGE,
    query,
    handler
  })
}

module.exports = resolver
