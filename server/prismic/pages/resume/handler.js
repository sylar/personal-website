const {
  getKeyText,
  getDate,
  getLink,
  getRichText,
  getSelect
} = require('../../types')
const {get, find, map, camelCase} = require('lodash')
const types = require('../../constants')

const handler = data => {
  const title = getRichText(get(data, types.TITLE))
  const email = getLink(get(data, types.EMAIL)).url
  const logo = getLink(get(data, types.LOGO)).url
  const location = getKeyText(get(data, types.LOCATION))
  const slices = {
    [types.SLICE_EXPERIENCE]: find(data.body, {
      slice_type: types.SLICE_EXPERIENCE
    }),
    [camelCase(types.SLICE_SIDE_PROJECTS)]: find(data.body, {
      slice_type: types.SLICE_SIDE_PROJECTS
    }),
    [types.SLICE_HOBBIES]: find(data.body, {slice_type: types.SLICE_HOBBIES})
  }

  const slicesContent = {
    [camelCase(types.SLICE_EXPERIENCE)]: {
      title: getRichText(
        get(
          slices,
          `${types.SLICE_EXPERIENCE}.primary.${types.SLICE_EXPERIENCE_TITLE}`
        )
      ),
      content: map(get(slices, `${types.SLICE_EXPERIENCE}.items`), item => ({
        title: getRichText(get(item, `${types.JOB_ITEM}.data.${types.TITLE}`)),
        company: {
          name: get(
            item,
            `${types.JOB_ITEM}.data.${types.COMPANY}.data.${types.NAME}`
          ),
          description: getRichText(
            get(
              item,
              `${types.JOB_ITEM}.data.${types.COMPANY}.data.${
                types.DESCRIPTION
              }`
            )
          ),
          url: getLink(
            get(
              item,
              `${types.JOB_ITEM}.data.${types.COMPANY}.data.${types.URL}`
            )
          ),
          logo: getLink(
            get(
              item,
              `${types.JOB_ITEM}.data.${types.COMPANY}.data.${types.LOGO}`
            )
          ).url
        },
        startDate: getDate(
          get(item, `${types.JOB_ITEM}.data.${types.START_DATE}`)
        ),
        endDate:
          getDate(get(item, `${types.JOB_ITEM}.data.${types.END_DATE}`)) ||
          null,
        currentJob: getSelect(
          get(item, `${types.JOB_ITEM}.data.${types.CURRENT_JOB}`)
        ),
        type: getSelect(get(item, `${types.JOB_ITEM}.data.${types.TYPE}`)),
        tasks: map(get(item, `${types.JOB_ITEM}.data.body`), job => ({
          description: getRichText(get(job, `primary.${types.DESCRIPTION}`)),
          stack: map(get(job, 'items'), techItem => ({
            name: getKeyText(
              get(techItem, `${types.TECH_STACK_ITEM}.data.${types.NAME}`)
            ),
            url: getLink(
              get(techItem, `${types.TECH_STACK_ITEM}.data.${types.URL}`),
              get(techItem, `${types.TECH_STACK_ITEM}.data.${types.URL}`)
            ).url
          }))
        }))
      }))
    },
    [camelCase(types.SLICE_SIDE_PROJECTS)]: {
      title: getRichText(
        get(
          slices,
          `${camelCase(types.SLICE_SIDE_PROJECTS)}.primary.${
            types.SLICE_SIDE_PROJECTS_TITLE
          }`
        )
      ),
      content: map(
        get(slices, `${camelCase(types.SLICE_SIDE_PROJECTS)}.items`),
        item => ({
          title: getKeyText(
            get(item, `${types.SIDE_PROJECT}.data.${types.NAME}`)
          ),
          url: getLink(get(item, `${types.SIDE_PROJECT}.data.${types.URL}`))
            .url,
          description: getRichText(
            get(item, `${types.SIDE_PROJECT}.data.${types.DESCRIPTION}`)
          )
        })
      )
    },
    [camelCase(types.SLICE_HOBBIES)]: {
      title: getRichText(
        get(
          slices,
          `${types.SLICE_HOBBIES}.primary.${types.SLICE_HOBBIES_TITLE}`
        )
      ),
      description: getRichText(
        get(slices, `${types.SLICE_HOBBIES}.primary.${types.DESCRIPTION}`)
      )
    }
  }

  return {title, email, logo, location, slices: slicesContent}
}

module.exports = handler
