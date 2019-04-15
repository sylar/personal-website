const { NODE_ENV = 'development' } = process.env
if (NODE_ENV === 'development') {
  require('dotenv').config()
}

const { GRAPHQL_ENDPOINT } = process.env
module.exports = {
  env: {
    GRAPHQL_ENDPOINT
  },
  target: 'serverless',
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/cv': { page: '/cv' },
      '/resume': { page: '/cv' }
    }
  }
}
