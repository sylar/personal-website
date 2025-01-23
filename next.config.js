module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/resume',
        permanent: true
      }
    ]
  },
  compiler: {
    styledComponents: true
  }
}
