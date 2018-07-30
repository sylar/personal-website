// next.config.js
const fs = require('fs')
const generateReadme = require('./readme.js')

const getCorrectPage = currentPage =>
  currentPage === 'home' ? '/' : `/${currentPage}`
const getCorrectUrl = currentRepo =>
  currentRepo === 'andreiconstantinescu.github.io' ? '' : currentRepo

const isDev = process.env.NODE_ENV !== 'production'
let env = {}

if (isDev) {
  env = require('./env.json')
}

module.exports = {
  exportPathMap: () => {
    if (isDev) {
      return
    }

    fs.writeFileSync(
      `./out/${process.env.CURRENT_PAGE}/Readme.md`,
      generateReadme({
        repo: process.env.CURRENT_REPO,
        deployUrl: `https://constantinescu.io/${getCorrectUrl(
          process.env.CURRENT_REPO
        )}`
      })
    )

    return {
      '/': {
        page: getCorrectPage(process.env.CURRENT_PAGE)
      }
    }
  },
  serverRuntimeConfig: {
    PRISMIC_API_KEY:
      process.env.PRISMIC_API_KEY || env ? env.PRISMIC_API_KEY : null,
    PRISMIC_API: process.env.PRISMIC_API || env ? env.PRISMIC_API : null
  },
  publicRuntimeConfig: {
    GRAPHQL_ENDPOINT:
      process.env.GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql'
  }
}
