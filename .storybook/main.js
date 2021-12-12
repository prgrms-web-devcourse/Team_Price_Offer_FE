const path = require('path');
const resolvePath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(
      __dirname,
      '../src/',
    );
    config.resolve.alias['@components'] = path.resolve(
      __dirname,
      '../src/components',
    );
    config.resolve.alias['@utils'] = path.resolve(
      __dirname,
      '../src/utils',
    );
    config.resolve.alias['@hooks'] = path.resolve(__dirname, '../src/hooks');
    config.resolve.alias['@api'] = path.resolve(
      __dirname,
      '../src/api',
    );
    config.resolve.alias['@contexts'] = path.resolve(
      __dirname,
      '../src/contexts',
    );
    config.resolve.alias['@pages'] = path.resolve(__dirname, '../src/pages');
    config.resolve.alias['@assets'] = path.resolve(__dirname, '../src/assets');
    config.resolve.alias["@emotion/styled"] = resolvePath("node_modules/@emotion/styled");
    return config;
  },
}