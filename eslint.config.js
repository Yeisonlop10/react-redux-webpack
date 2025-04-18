// eslint.config.js
const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const compat = require('eslint-compat-utils');

module.exports = [
  js.configs.recommended,
  compat.config({
    extends: [
      'plugin:react/recommended',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
  }),
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
  },
];
