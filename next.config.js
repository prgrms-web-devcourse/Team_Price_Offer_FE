const path = require('path')

module.exports = {
  async redirects() {
    return [
      {
        source: '/profile/contents/:path*',
        destination: '/',
        permanent: true,
      },
    ]
  },
  env: {
    BASE_API_HOST:
      'http://ec2-54-180-35-183.ap-northeast-2.compute.amazonaws.com:8080',
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    reactStrictMode: true,
  },
  buildModules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: ['@styles/scss/_variables.scss', '@styles/scss/_mixins.scss'],
  },
}
