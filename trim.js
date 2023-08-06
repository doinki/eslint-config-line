require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  plugins: ['trim'],
  rules: { 'trim/argument': 'warn', 'trim/class-name': 'warn' },
};
