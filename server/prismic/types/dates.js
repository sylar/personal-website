const {Date: PrismicDate} = require('prismic-dom')

const getDate = date => new Date(PrismicDate(date))

module.exports = getDate
