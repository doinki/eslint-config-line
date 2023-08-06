require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
      ],
      files: '**/*.ts?(x)',
    },
  ],
};
