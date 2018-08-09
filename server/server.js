const next = require('next')
const resolvers = require('./resolvers')
const types = require('./types')
const {GraphQLServer} = require('graphql-yoga')

const port = parseInt(process.env.PORT, 10) || 4000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const {renderAndCache} = require('./caching')
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new GraphQLServer({
    typeDefs: types,
    resolvers
  })
  const {express} = server
  const whitelistedEndpoints = ['/graphql']
  const cacheableEndpoints = ['/', '/cv']

  // if (dev) {
  whitelistedEndpoints.push('/playground')
  // }

  express.use((req, res, next) => {
    if (whitelistedEndpoints.includes(req.path)) {
      return next()
    }

    if (cacheableEndpoints.includes(req.path) && !dev) {
      return renderAndCache({req, res, app})
    }

    return handle(req, res)
  })

  server.start(
    {
      port,
      endpoint: '/graphql',
      playground: '/playground',
      cacheControl: true
    },
    ({port}) => console.log(`Listening on ${port}`)
  )
})
