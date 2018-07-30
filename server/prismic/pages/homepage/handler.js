const {getKeyText, getLink, getRichText} = require('../../types')
const {get, map, pickBy, identity} = require('lodash')
const types = require('../../constants')

const handler = data => {
  const title = getRichText(get(data, types.TITLE))
  const description = getRichText(get(data, types.DESCRIPTION))
  const logo = getLink(get(data, types.LOGO)).url
  const urlsBlock = map(get(data, types.URLS_BLOCK), url => {
    const link = pickBy(getLink(get(url, types.URL)), identity)
    return {
      name: getKeyText(get(url, types.KEY)),
      ...link
    }
  })

  return {title, description, logo, urlsBlock}
}

module.exports = handler
