module.exports = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/cv?mode=lite',
        permanent: true
      }
    ]
  }
}
