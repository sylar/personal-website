import gql from 'graphql-tag'

const query = gql`
  {
    homepage {
      logo
      title
      description
      urlsBlock {
        name
        url
      }
    }
  }
`

export default query
