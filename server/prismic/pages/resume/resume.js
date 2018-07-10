const {
  getKeyText,
  getDates,
  getLink,
  getRichText,
  getSelect
} = require('../../types')
const {get} = require('lodash')

const mapResult = data => {
  const title = getRichText(get('data.title'))
  const email = getLink(get('data.email'))
  const slicesBlocks = {
    experience: {
      title: ''
    }
  }
}
