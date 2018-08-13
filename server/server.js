const next = require('next')
const resolvers = require('./resolvers')
const types = require('./types')
const {GraphQLServer} = require('graphql-yoga')
const compression = require('compression')
const getConfig = require('next/config').default
const bodyParser = require('body-parser')

const port = parseInt(process.env.PORT, 10) || 4000
const isProd = process.env.NODE_ENV === 'production'
const app = next({dev: !isProd})
const {renderAndCache, clearCache} = require('./caching')
const handle = app.getRequestHandler()
const {
  serverRuntimeConfig: {DEPLOY_URL}
} = getConfig()

app.prepare().then(() => {
  const server = new GraphQLServer({
    typeDefs: types,
    resolvers
  })
  const {express} = server
  const whitelistedEndpoints = ['/graphql', '/cache-clear']
  const cacheableEndpoints = ['/', '/cv']

  express.use(bodyParser.json())
  express.use(bodyParser.urlencoded({extended: true}))

  if (!isProd) {
    whitelistedEndpoints.push('/playground')
  }

  if (isProd) {
    express.use(compression())
  }

  express.use((req, res, next) => {
    if (whitelistedEndpoints.includes(req.path)) {
      return next()
    }

    if (cacheableEndpoints.includes(req.path) && isProd) {
      return renderAndCache({req, res, app})
    }

    return handle(req, res)
  })

  if (isProd) {
    express.post('/cache-clear', (req, res) => {
      console.log(req.body)
      return res.send(200)
    })
  }

  server.start(
    {
      port,
      endpoint: '/graphql',
      playground: isProd ? false : '/playground',
      cacheControl: true,
      cors: isProd ? DEPLOY_URL : null
    },
    ({port}) => console.log(`Listening on ${port}`)
  )
})
