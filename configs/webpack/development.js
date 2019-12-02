const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');

const {paths} = require('./common');


module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '[Dev] App',
            template: path.resolve(paths.PUBLIC_DIR, 'index.html'),
        }),
        new DotenvPlugin({
            path: path.resolve(paths.CONFIGS_DIR, 'env/development.conf'),
        }),
    ],
    devServer: {
        contentBase: paths.DIST_DIR,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    stats: {
        modules: false,
    },
};