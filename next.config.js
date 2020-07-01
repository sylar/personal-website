module.exports = {
  target: 'serverless',
  exportPathMap: async function exportPathMap() {
    return {
      '/': { page: '/home' },
      '/resume': { page: '/cv' }
    }
  }
}
