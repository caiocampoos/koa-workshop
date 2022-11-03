const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ],
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
        },
        {
          loader: 'postcss-loader'
        }
      ]
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: 'assets/[hash].[ext]'
          }
        }
      ]
    }]
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/': 'http://localhost:4000'
    }
  },
  plugins: [
    new CleanWebpackPlugin({outputDirectory}),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    })
  ]
};