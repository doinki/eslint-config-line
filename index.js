require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: { browser: true },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/jsx-runtime'],
  parserOptions: { ecmaVersion: 'latest' },
  overrides: [
    {
      extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/jsx-runtime',
      ],
      files: '**/*.ts?(x)',
    },
  ],
  settings: {
    'import/resolver': {
      [require.resolve('eslint-import-resolver-typescript')]: {
        alwaysTryTypes: true,
      },
    },
  },
};
