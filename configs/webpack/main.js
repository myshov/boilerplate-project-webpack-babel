const merge = require('webpack-merge');

const {commonConfig} = require('./common');


module.exports = ({env}) => {
    const envConfig = require(`./${env}.js`);
    return merge(commonConfig, envConfig);
};
