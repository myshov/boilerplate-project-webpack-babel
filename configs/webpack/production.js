const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotenvPlugin = require('dotenv-webpack');
const AutoprefixerPlugin = require('autoprefixer');

const { paths } = require('./common');

module.exports = {
  mode: 'production',
  entry: {
    app: [
      './index.js',
      // add polyfills explicitly for transpiled dynamic import
      // @see https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import
      'core-js/modules/es.promise',
      'core-js/modules/es.array.iterator',
    ],
  },
  output: {
    path: paths.DIST_DIR,
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [AutoprefixerPlugin()],
            },
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: 'images/[name].[contenthash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10 * 1024,
              name: 'images/[name].[contenthash].[ext]',
            },
          },
          {
            loader: 'svgo-loader',
          },
        ],
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'App',
      template: path.resolve(paths.PUBLIC_DIR, 'index.html'),
    }),
    new DotenvPlugin({
      path: path.resolve(paths.CONFIGS_DIR, 'env/production.conf'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].chunk.css',
    }),
  ],
};
