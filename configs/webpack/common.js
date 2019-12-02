const path = require('path');


const DIST_DIR = path.resolve(__dirname, '../../dist');
const SRC_DIR =  path.resolve(__dirname, '../../src');
const PUBLIC_DIR = path.resolve(__dirname, '../../public');
const CONFIGS_DIR = path.resolve(__dirname, '../../configs');

const config = {
    context: SRC_DIR,
    entry: './index.js',
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
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
