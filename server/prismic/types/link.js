const {Link} = require('prismic-dom')

const getUrl = link => Link.url(link)

module.exports = getUrl
