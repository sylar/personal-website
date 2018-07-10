const queryResolvers = {
  Query: {
    hello: (_, {name}) => `Hello ${name || 'World'}`
  }
}

module.exports = queryResolvers
