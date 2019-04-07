import gql from 'graphql-tag'

const query = gql`
  {
    prismic {
      homepage
    }
  }
`

export default query
