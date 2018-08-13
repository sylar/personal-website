const isDev = process.env.NODE_ENV !== 'production'
const isProd = process.env.NODE_ENV === 'production'
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
    DEPLOY_URL: process.env.DEPLOY_URL || null,
    CACHE_CLEAR_SECRET:
      process.env.CACHE_CLEAR_SECRET || (env ? env.CACHE_CLEAR_SECRET : null),
    CLOUDFLARE_EMAIL:
      process.env.CLOUDFLARE_EMAIL || (env ? env.CLOUDFLARE_EMAIL : null),
    CLOUDFLARE_ZONE_ID:
      process.env.CLOUDFLARE_ZONE_ID || (env ? env.CLOUDFLARE_ZONE_ID : null),
    CLOUDFLARE_GLOBAL_KEY:
      process.env.CLOUDFLARE_GLOBAL_KEY ||
      (env ? env.CLOUDFLARE_GLOBAL_KEY : null)
  },
  publicRuntimeConfig: {
    GRAPHQL_ENDPOINT:
      process.env.GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql'
  }
}
