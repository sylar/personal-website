module.exports = {
  target: 'serverless',
  exportPathMap: async function exportPathMap() {
    return {
      '/cv': { page: '/resume' }
    }
  }
}
