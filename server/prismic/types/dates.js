const {Date} = require('prismic-dom')
const {getMarkdown} = require('../utils')

const getDate = date => Date(date)

module.exports = date => getMarkdown(getDate(date))
