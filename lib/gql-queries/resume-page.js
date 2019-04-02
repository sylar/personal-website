import gql from 'graphql-tag'

const query = gql`
  {
    prismic {
      resume
    }
  }
`

export default query
