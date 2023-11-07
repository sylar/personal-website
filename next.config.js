module.exports = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/',
        permanent: true
      }
    ]
  },
  typescript: {
    ignoreBuildErrors: true
  }
}
