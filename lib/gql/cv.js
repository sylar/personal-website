import gql from 'graphql-tag'

const query = gql`
{
  resume {
    lastUpdate
    title
    email
    slices {
      experience {
        title
        content {
          title
          company {
            name
            description
          }
          startDate
          endDate
          currentJob
          type
          tasks {
            description
            stack {
              name
              url
            }
          }
        }
      }
    }
  }
}
`

export default query
