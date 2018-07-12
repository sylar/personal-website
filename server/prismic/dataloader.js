const Prismic = require('prismic-javascript')
const {PRISMIC_API} = require('../constants')
const PrismicDOM = require('prismic-dom')
const TurndownService = require('turndown')
const {noop} = require('lodash')

const turndownService = new TurndownService()

const getContent = async function (pageUid) {
  try {
    console.log('dddd')
    const api = await Prismic.api(PRISMIC_API)
    const content = await api.getByUID('resume', 'resume', {
      graphQuery: `{
        resume {
          title
          email
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
    })
    // console.log(content.data.body)
    // console.log(content.data.body[0])
    // console.log(content.data.body[0].items)
    // console.log(content.data.body[0].items[0].job_item.data)
    // console.log(content.data.body[0].items[0].job_item.data.body[0])
    // console.log(content.data.body[0].items[0].job_item.data.body[2])
    // console.log(content.data.body[0].items[0].job_item.data.body[2].primary)
    console.log(content.data.body[1].items[0].side_project.data)
    // console.log(content.data.body[0].items[0].job_item.data.body[0].items[0].tech_stack_item.data.url)
    // console.log(content.data.body[0].items[0])
    // console.log(content.data.body[0].items[0].job_item.data.body[0].items)
    // console.log(content.data.body[0].items[0].job_item.data.body[0].primary)
    // const markdown = turndownService.turndown(
    //   PrismicDOM.RichText.asHtml(
    //     content.data.urls_block[0].key,
    //     () => {},
    //     console.log
    //   )
    // )
    // const markdown2 = turndownService.turndown(
    //   PrismicDOM.Link.url(content.data.urls_block[0].url, noop, console.log)
    // )
    // // console.log('\n')
    // // console.log(content.data.urls_block[0].url)
    // // // console.log(markdown)
    // console.log(markdown2)
    return content
  } catch (e) {
    console.log('e', e)
    return e
  }
}

console.log(getContent('resume'))
