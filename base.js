require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['airbnb-base'],
  parserOptions: { ecmaVersion: 'latest' },
  overrides: [
    { extends: ['airbnb-base', 'airbnb-typescript/base'], files: '**/*.ts' },
  ],
  settings: {
    'import/resolver': {
      [require.resolve('eslint-import-resolver-typescript')]: {
        alwaysTryTypes: true,
      },
    },
  },
};
