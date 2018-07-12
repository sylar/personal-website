const {Date} = require('prismic-dom')

const getDate = date => Date(date)

module.exports = date => getDate(date)
