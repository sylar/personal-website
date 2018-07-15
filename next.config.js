// next.config.js
const fs = require('fs')
const generateReadme = require('./readme.js')
const env = require('./env.json')

const getCorrectPage = currentPage =>
  currentPage === 'home' ? '/' : `/${currentPage}`
const getCorrectUrl = currentRepo =>
  currentRepo === 'andreiconstantinescu.github.io' ? '' : currentRepo

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  exportPathMap: () => {
    if (!isProd) {
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
    PRISMIC_API_KEY: env.PRISMIC_API_KEY || null
  },
  publicRuntimeConfig: {
    PRISMIC_API: env.PRISMIC_API || null
  }
}
