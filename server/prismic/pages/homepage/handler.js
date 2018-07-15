const {getKeyText, getLink, getRichText} = require('../../types')
const {get, map} = require('lodash')
const types = require('../../constants')

const handler = data => {
  const title = getRichText(get(data, types.TITLE))
  const description = getRichText(get(data, types.DESCRIPTION))
  const logo = getLink(get(data, types.LOGO))
  const urlsBlock = map(get(data, types.URLS_BLOCK), url => ({
    name: getKeyText(get(url, types.KEY)),
    url: getLink(get(url, types.URL))
  }))

  return {title, description, logo, urlsBlock}
}

module.exports = handler
