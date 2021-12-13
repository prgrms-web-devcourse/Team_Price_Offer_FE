const path = require('path')

module.exports = {
  env: {
    BASE_API_HOST:
      'http://ec2-54-180-35-183.ap-northeast-2.compute.amazonaws.com:8080',
    KAKAO_API_HOST: 'https://kauth.kakao.com',
    KAKAO_API_KEY: '76823e5b8699f9ae9c2aaa0157325076',
    KAKAO_REDIRECT_URI: 'http://localhost:3000/oauth/callback/kakao',
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
