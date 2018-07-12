const {homepageResolver, resumeResolver} = require('./pages')
const {HOMEPAGE, RESUMEPAGE} = require('../prismic/constants')
const {hasIn} = require('lodash')

const queryResolvers = {
  Query: {
    [HOMEPAGE]: homepageResolver,
    [RESUMEPAGE]: resumeResolver
  },
  Page: {
    __resolveType (obj, context, info) {
      if (hasIn(obj, ['title', 'email', 'slices'])) {
        return 'ResumePage'
      }

      if (hasIn(obj, ['title', 'description', 'urlsBlock'])) {
        return 'HomePage'
      }

      return null
    }
  }
}

module.exports = queryResolvers
