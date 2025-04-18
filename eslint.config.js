// eslint.config.js
const js = require('@eslint/js');
const react = require('eslint-plugin-react');

module.exports = [
  js.configs.recommended,
  react.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...js.configs.recommended.globals,
        browser: true,
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
