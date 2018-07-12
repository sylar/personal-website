const {Link} = require('prismic-dom')

const getUrl = link => Link.url(link)

module.exports = (link, a, b, c) => {console.log('link', link, a, b, c); return getUrl(link)}
