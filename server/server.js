const next = require('next')
const resolvers = require('./resolvers')
const types = require('./types')
const {GraphQLServer} = require('graphql-yoga')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const server = new GraphQLServer({typeDefs: types, resolvers})

app.prepare().then(() => {
  const {express} = server

  express.get('*', (req, res) => {
    return handle(req, res)
  })

  server.start(
    {
      port,
      endpoint: '/graphql',
      // playground: '/playground',
      cacheControl: false
    },
    ({port}) => console.log(`Listening on ${port}`)
  )
})
