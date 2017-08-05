// @flow
// next.config.js
const fs = require('fs')
const Readme = require('./metadata/Readme.md.js')

exports.exportPathMap = () => {
  // console.log(process.env.CURRENT_ITEM);
  // console.log(process.env.EXTERNAL_PATH);
  fs.writeFileSync(
    `./out/${process.env.CURRENT_ITEM}/Readme.md`,
    Readme({
      repo: 'THE REPO YO',
      deployUrl: 'https://constantinescu.io/cv'
    })
  )

  return {'/': {page: process.env.CURRENT_ITEM === 'home' ? '/' : `/${process.env.CURRENT_ITEM}`}}
}
