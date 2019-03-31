require('dotenv').config()

const { GRAPHQL_ENDPOINT, NODE_ENV, PORT } = process.env

module.exports = {
  webpack: function (config, { dev }) {
    config.plugins = config.plugins || []

    if (!dev) {
      const TargetsPlugin = require('targets-webpack-plugin')
      config.plugins = [
        ...config.plugins,
        new TargetsPlugin({
          browsers: ['last 2 versions', 'chrome >= 41', 'ie >= 11']
        })
      ]
    }

    return config
  },

  publicRuntimeConfig: {
    GRAPHQL_ENDPOINT: GRAPHQL_ENDPOINT,
    NODE_ENV: NODE_ENV,
    PORT: PORT
  }
}
