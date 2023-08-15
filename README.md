# eslint-config-line

## Installation

```bash
# yarn
yarn add -D eslint eslint-config-line

# npm
npm i -D eslint eslint-config-line
```

## Configuration

- line - airbnb, airbnb/hooks, react
- line/base - airbnb-base
- line/jest-dom-testing-library - jest dom
- line/jest - jest
- line/next - @next/next
- line/prettier - prettier
- line/react-testing-library - testing library
- line/sort - salt, simple-import-sort, sort-destructure-keys, sort-keys-fix
- line/storybook - storybook
- line/tailwindcss - tailwindcss
- line/trim - trim
- line/typescript - @typescript-eslint

### .eslintrc.json

```json
{
  "extends": [
    "line/typescript",
    "line",
    "line/next",
    "line/tailwindcss",
    "line/sort",
    "line/trim",
    "line/prettier"
  ],
  "parserOptions": { "project": "tsconfig.json" }
}
```
