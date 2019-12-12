const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, '../../dist');
const SRC_DIR = path.resolve(__dirname, '../../src');
const PUBLIC_DIR = path.resolve(__dirname, '../../public');
const CONFIGS_DIR = path.resolve(__dirname, '../../configs');

const config = {
  context: SRC_DIR,
  entry: {
    app: './index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: [SRC_DIR],
        loader: 'babel-loader',
      },
    ],
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [new CaseSensitivePathsPlugin()],
};

module.exports = {
  commonConfig: config,
  paths: {
    SRC_DIR,
    DIST_DIR,
    PUBLIC_DIR,
    CONFIGS_DIR,
  },
};
