module.exports = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/cv',
        permanent: true
      }
    ]
  }
}
