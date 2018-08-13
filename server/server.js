const next = require('next')
const resolvers = require('./resolvers')
const types = require('./types')
const compression = require('compression')
const getConfig = require('next/config').default
const bodyParser = require('body-parser')
const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const {MemcachedCache} = require('apollo-server-memcached')

const port = parseInt(process.env.PORT, 10) || 4000
const isProd = process.env.NODE_ENV === 'production'
const app = next({dev: !isProd})
const {renderAndCache, clearCache} = require('./caching')
const handle = app.getRequestHandler()
const {
  serverRuntimeConfig: {DEPLOY_URL, CACHE_CLEAR_SECRET}
} = getConfig()

app.prepare().then(() => {
  const server = express()
  const apollo = new ApolloServer({typeDefs: types, resolvers})

  apollo.applyMiddleware({
    app: server,
    cacheControl: true,
    cors: isProd ? DEPLOY_URL : null,
    persistedQueries: {
      cache: new MemcachedCache(
        ['memcached-server-1', 'memcached-server-2', 'memcached-server-3'],
        {retries: 10, retry: 10000} // Options
      )
    }
  })

  // const {express} = server
  const whitelistedEndpoints = ['/graphql', '/cache-clear']
  const cacheableEndpoints = ['/', '/cv/', '/cv']

  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({extended: true}))

  if (!isProd) {
    whitelistedEndpoints.push('/playground')
  }

  if (isProd) {
    server.use(compression())
  }

  server.use((req, res, next) => {
    if (whitelistedEndpoints.includes(req.path)) {
      return next()
    }

    if (cacheableEndpoints.includes(req.path) && isProd) {
      return renderAndCache({req, res, app})
    }

    return handle(req, res)
  })

  if (isProd) {
    server.post('/cache-clear', ({body}, res) => {
      const {secret} = body
      if (secret === CACHE_CLEAR_SECRET) {
        clearCache()
        return res.sendStatus(200)
      }

      return res.sendStatus(400)
    })
  }

  server.listen({port}, () => console.log(`Listening on ${port}`))
  // server.start(
  //   {
  //     port,
  //     endpoint: '/graphql',
  //     playground: isProd ? false : '/playground',
  //     cacheControl: true,
  //     cors: isProd ? DEPLOY_URL : null
  //   },
  //   ({port}) => console.log(`Listening on ${port}`)
  // )
})
