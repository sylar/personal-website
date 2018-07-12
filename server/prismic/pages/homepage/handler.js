const {getKeyText, getLink, getRichText} = require('../../types')
const {get, map} = require('lodash')
const types = require('../../constants')

const handler = data => {
  const title = getRichText(get(data, types.TITLE))
  const description = getRichText(get(data, types.DESCRIPTION))
  const urlsBlock = map(get(data, types.URLS_BLOCK), url => ({
    name: getKeyText(get(url, types.KEY)),
    url: getLink(get(url, types.URL))
  }))

  return {title, description, urlsBlock}
}

module.exports = handler
