const config = require('../../packages/babel');

const customConfig = {
  ...config,
  presets: [
    ...config.presets,
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [['relay', { schema: '../api/data/schema.graphql' }]],
};

module.exports = customConfig;