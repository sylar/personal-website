module.exports = {
  target: 'serverless',
  exportPathMap: async function exportPathMap() {
    return {
      '/': { page: '/' },
      '/cv': { page: '/cv' },
      '/resume': { page: '/cv' }
    }
  }
}
