const { NODE_ENV = 'development' } = process.env
if (NODE_ENV === 'development') {
  require('dotenv').config()
}

const { GRAPHQL_ENDPOINT, PORT } = process.env
module.exports = {
  publicRuntimeConfig: {
    GRAPHQL_ENDPOINT: GRAPHQL_ENDPOINT,
    NODE_ENV: NODE_ENV,
    PORT: PORT
  },

  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/cv': { page: '/cv' },
      '/resume': { page: '/cv' }
    }
  }
}
