const {Date: PrismicDate} = require('prismic-dom')

const getDate = date => PrismicDate(date)

module.exports = getDate
