const {Link} = require('prismic-dom')

const getUrl = link => ({
  url: Link.url(link),
  target: link.target
})

module.exports = getUrl
