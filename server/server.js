const next = require('next')
const resolvers = require('./resolvers')
const types = require('./types')
const {GraphQLServer} = require('graphql-yoga')
const compression = require('compression')
const fs = require('fs')

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

  if (dev) {
    whitelistedEndpoints.push('/playground')
  }

  if (!dev) {
    express.use(compression())
  }

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
      playground: dev ? '/playground' : false,
      cacheControl: true,
      https: dev
        ? false
        : {
          key: fs.readFileSync(process.env.SSL_KEY_PATH),
          cert: fs.readFileSync(process.env.SSL_CERT_PATH)
        }
    },
    ({port}) => console.log(`Listening on ${port}`)
  )
})
