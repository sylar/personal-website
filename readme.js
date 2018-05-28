// @flow

import template from 'lodash/template'

const options = {
  interpolate: /{{([\s\S]+?)}}/g,
}

const ReadmeTeamplate = `
  # {{ repo }}
  Deployed here: [{{ repo }}]({{ deployUrl }})
  This is an export from the monorepo: [constantinescu.io](https://github.com/andreiconstantinescu/constantinescu.io)
`

module.exports = (props: Object) => template(ReadmeTeamplate, options)(props)
