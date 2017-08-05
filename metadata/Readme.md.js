// @flow

import template from 'lodash.template'

const options = {
  interpolate: /{{([\s\S]+?)}}/g
}

const Template = `
  # {{ repo }}

  Deployed here: [{{ repo }}]({{ deployUrl }})

  This is an export from the parent: (constantinescu.io)[https://github.com/andreiconstantinescu/constantinescu.io]
`

module.exports = (props: Object) => template(Template, options)(props)
