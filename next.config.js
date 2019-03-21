module.exports = {
  webpack: function (config, { dev }) {
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
  publicRuntimeConfig: {
    GRAPHQL_ENDPOINT:
      process.env.GRAPHQL_ENDPOINT || 'http://localhost:7777/graphql'
  }
}
