const path = require('path')

const resolvePath = _path => path.join(process.cwd(), _path)

module.exports = {
  // ...
  webpackFinal: async config => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@emotion/core': resolvePath('node_modules/@emotion/react'),
        '@emotion/styled': resolvePath('node_modules/@emotion/styled'),
        'emotion-theming': resolvePath('node_modules/@emotion/react'),
      },
    },
  }),
}
