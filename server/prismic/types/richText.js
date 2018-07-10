const { RichText } = require('prismic-dom')
const { getMarkdown } = require('../utils')

const getHTML = elem => RichText.asHtml(elem)

module.exports = elem => getMarkdown(getHTML(elem))
