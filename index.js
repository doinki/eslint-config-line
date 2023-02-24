require('@rushstack/eslint-patch/modern-module-resolution');

const rules = {
  'react/function-component-definition': [
    'error',
    {
      namedComponents: ['arrow-function'],
      unnamedComponents: ['arrow-function'],
    },
  ],
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-sort-props': [
    'warn',
    { callbacksLast: true, reservedFirst: true, shorthandLast: true },
  ],
  'react/prop-types': 'off',
  'react/require-default-props': 'off',
  'salt/react-hook-dependencies': 'warn',
  'trim/argument': 'warn',
  'trim/class-name': 'warn',
};

module.exports = {
  env: { browser: true },
  extends: ['./base.js', 'airbnb', 'airbnb/hooks', 'plugin:react/jsx-runtime'],
  parserOptions: { ecmaVersion: 'latest' },
  plugins: ['salt', 'trim'],
  rules,
  overrides: [
    {
      extends: [
        './base.js',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/jsx-runtime',
      ],
      files: '**/*.ts?(x)',
      rules,
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
