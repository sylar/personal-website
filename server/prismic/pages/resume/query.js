module.exports = `{
  resume {
    title
    email
    logo
    location
    body {
      ...on experience {
        non-repeat {
          experience_title
        }
        repeat {
          job_item {
            ...on past_job {
              title
              company {
                name
                description
              }
              start_date
              current_job
              type
              body {
                ...on job_description {
                  non-repeat {
                    ...non-repeatFields
                  }
                  repeat {
                    tech_stack_item {
                      name
                      url
                      type
                    }
                  }
                }
              }
            }
          }
        }
      }
      ...on side_projects {
        non-repeat {
          ...non-repeatFields
        }
        repeat {
          side_project {
            ...on project {
              name
              url
              description
            }
          }
        }
      }
      ...on hobbies {
        non-repeat {
          ...non-repeatFields
        }
      }
    }
  }
}`
