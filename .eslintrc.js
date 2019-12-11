module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    // ecmaVersion: 2018,
    sourceType: 'module',
  },
  overrides: [{
    files: ['configs/**/*.js'],
    rules: {
      'import/no-extraneous-dependencies': ["error", {"devDependencies": true}],
      'import/no-dynamic-require': "off",
      'global-require': 'off',
    },
  }],
  root: true,
  noInlineConfig: true,
  reportUnusedDisableDirectives: true,
};
