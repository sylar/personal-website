// next.config.js
const fs = require('fs')
const Readme = require('./.out/Readme.md.js')

const getCorrectPage = currentPage => (currentPage === 'home' ? '/' : `/${currentPage}`)
const getCorrectUrl = currentRepo => (currentRepo === 'andreiconstantinescu.github.io' ? '' : currentRepo)

exports.exportPathMap = () => {
  fs.writeFileSync(
    `./out/${process.env.CURRENT_PAGE}/Readme.md`,
    Readme({
      repo: process.env.CURRENT_REPO,
      deployUrl: `https://constantinescu.io/${getCorrectUrl(process.env.CURRENT_REPO)}`
    })
  )

  return {
    '/': {
      page: getCorrectPage(process.env.CURRENT_PAGE)
    }
  }
}
