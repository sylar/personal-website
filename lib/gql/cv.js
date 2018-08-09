import gql from 'graphql-tag'

const query = gql`
  {
    resume {
      lastUpdate
      email
      logo
      location
      slices {
        experience {
          title
          content {
            title
            company {
              name
              description
              url {
                value: url
                target
              }
              logo
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
        sideProjects {
          title
          content {
            title
            url
            description
          }
        }
        hobbies {
          title
          description
        }
      }
    }
  }
`

export default query
