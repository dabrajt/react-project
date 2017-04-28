const webpack = require('webpack');
const path = require('path');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
      }],
    }],
  },
};

module.exports = config;
