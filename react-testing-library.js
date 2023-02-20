require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  overrides: [
    {
      extends: ['plugin:testing-library/react'],
      files: [
        '**/__tests__/**/*.@(j|t)s?(x)',
        '**/?(*.)+(spec|test).@(j|t)s?(x)',
      ],
    },
  ],
};
