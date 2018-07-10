const Turndown = require('turndown')
const turndownService = new Turndown()

const getMarkdown = html => turndownService.turndown(html)

module.exports = {
  getMarkdown
}
