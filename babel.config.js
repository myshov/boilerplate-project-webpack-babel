module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
  ],
  // babel config for jest
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'usage',
            corejs: 3,
            targets: {
              node: 'current',
            },
          },
        ],
      ],
      plugins: ['dynamic-import-node'],
    },
  },
};
