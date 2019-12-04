const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');

const {paths} = require('./common');


module.exports = {
    mode: 'production',
    output: {
        path: paths.DIST_DIR,
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].chunk.js',
        publicPath: '/',
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
    ],
};
