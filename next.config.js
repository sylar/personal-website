const isDev = process.env.NODE_ENV !== 'production'
let env = null

if (isDev) {
  env = require('./env.json')
}

module.exports = {
  webpack: function (config, {dev}) {
    if (!dev) {
      const TargetsPlugin = require('targets-webpack-plugin')
      config.plugins.unshift(
        new TargetsPlugin({
          browsers: ['last 2 versions', 'chrome >= 41', 'ie >= 11']
        })
      )
    }
    return config
  },
  serverRuntimeConfig: {
    PRISMIC_API_KEY:
      process.env.PRISMIC_API_KEY || (env ? env.PRISMIC_API_KEY : null),
    PRISMIC_API: process.env.PRISMIC_API || (env ? env.PRISMIC_API : null),
    SSL_PATH_CRT: isDev ? null : process.env.SSL_PATH_CRT,
    SSL_PATH_KEY: isDev ? null : process.env.SSL_PATH_KEY
  },
  publicRuntimeConfig: {
    GRAPHQL_ENDPOINT:
      process.env.GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql'
  }
}
