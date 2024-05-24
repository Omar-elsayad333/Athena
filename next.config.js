const { redirect } = require('next/dist/server/api-utils')

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'athenaserver.azurewebsites.net',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/teacher-login',
        permanent: true,
      },
    ]
  },
}
