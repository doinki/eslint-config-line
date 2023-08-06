require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  plugins: [
    'salt',
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
  ],
  rules: {
    'salt/react-hook-dependencies': 'warn',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',
    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
  overrides: [
    {
      files: '**/*.ts?(x)',
      plugins: ['typescript-sort-keys'],
      rules: { 'typescript-sort-keys/interface': 'warn' },
    },
  ],
};
