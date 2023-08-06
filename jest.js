require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  overrides: [
    {
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    },
    {
      files: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
  ],
};
