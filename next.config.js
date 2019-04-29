const { NODE_ENV = 'development' } = process.env
if (NODE_ENV === 'development') {
  require('dotenv').config()
}

const { GRAPHQL_ENDPOINT, STAGING_GRAPHQL_ENDPOINT, NOW_ENV } = process.env
module.exports = {
  env: {
    GRAPHQL_ENDPOINT,
    STAGING_GRAPHQL_ENDPOINT,
    NOW_ENV
  },
  target: 'serverless',
  exportPathMap: async function exportPathMap () {
    return {
      '/': { page: '/' },
      '/cv': { page: '/cv' },
      '/resume': { page: '/cv' }
    }
  }
}
