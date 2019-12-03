const merge = require('webpack-merge');

const {commonConfig} = require('./common');

function getAddons(addons) {
    let actualAddons;

    if (addons === null || addons === undefined) {
        return [];
    }

    if (Array.isArray(addons)) {
        actualAddons = addons;
    } else {
        actualAddons = [addons];
    }

    return actualAddons
        .filter(Boolean)
        .map(addon => require(`./addons/${addon}.js`));
}

module.exports = ({env, addon}) => {
    const envConfig = require(`./${env}.js`);
    return merge(commonConfig, envConfig, ...getAddons(addon));
};
