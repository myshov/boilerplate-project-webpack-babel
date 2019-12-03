const path = require('path');


const DIST_DIR = path.resolve(__dirname, '../../dist');
const SRC_DIR =  path.resolve(__dirname, '../../src');
const PUBLIC_DIR = path.resolve(__dirname, '../../public');
const CONFIGS_DIR = path.resolve(__dirname, '../../configs');

const config = {
    context: SRC_DIR,
    entry: {
        app: './index.js',
    },
    output: {
        path: DIST_DIR,
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [{
            test: /\.(js)$/,
            include: [
                SRC_DIR,
            ],
            loader: 'babel-loader',
        }],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};

module.exports = {
    commonConfig: config,
    paths: {
        SRC_DIR,
        DIST_DIR,
        PUBLIC_DIR,
        CONFIGS_DIR
    },
};
