import Prismic from 'prismic-javascript'

import {PRISMIC_ENDPOINT} from './constants'

console.log('PRISMIC_ENDPOINT', PRISMIC_ENDPOINT)

const getPrismic = () =>
  Prismic.getApi(PRISMIC_ENDPOINT)
    .then(function (api) {
      return api.query('') // An empty query will return all the documents
    })
    .then(
      function (response) {
        console.log('Documents: ', response.results)
      },
      function (err) {
        console.log('Something went wrong: ', err)
      }
    )

export default getPrismic
