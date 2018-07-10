const {Link} = require('prismic-dom')
const {getMarkdown} = require('../utils')

const getUrl = link => Link.url(link)

module.exports = link => getMarkdown(getUrl(link))
