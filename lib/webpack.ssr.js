const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base');

const ssrConfig = {
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-server.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'ignore-loader',
      },
      {
        test: /\.less$/,
        use: 'ignore-loader',
      },
    ],
  },
};

module.exports = merge(baseConfig, ssrConfig);
