const Fetcher = require('../prismic/Fetcher')

const queryResolvers = {
  Query: {
    hello: (_, {name}) => `Hello ${name || 'World'}`,
    page: () => Fetcher.getPagePayload({})
  }
}

module.exports = queryResolvers
