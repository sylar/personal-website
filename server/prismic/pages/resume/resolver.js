const Fetcher = require('../../Fetcher')
const {RESUMEPAGE} = require('../../constants')
const handler = require('./handler')
const query = require('./query')

const resolver = (obj, args, ctx) => {
  return Fetcher.getPagePayload({
    page: RESUMEPAGE,
    pageType: RESUMEPAGE,
    query,
    handler
  })
}

module.exports = resolver
