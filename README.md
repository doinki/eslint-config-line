# eslint-config-line

## Installation

```bash
# yarn
yarn add -D eslint eslint-config-line

# npm
npm i -D eslint eslint-config-line
```

## Configuration

- line - react
- line/next - next
- line/base - node
- line/jest - jest
- line/jest-dom - jest-dom
- line/react-testing-library - react testing library
- line/storybook - storybook
- line/tailwindcss - tailwindcss
- line/prettier - prettier

### .eslintrc.json

```json
{
  "extends": [
    "line",
    "line/next",
    "line/jest",
    "line/react-testing-library",
    "line/storybook",
    "line/tailwindcss",
    "line/prettier"
  ],
  "parserOptions": { "project": "tsconfig.json" }
}
```
