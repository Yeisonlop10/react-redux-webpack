// eslint.config.js
const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const { FlatCompat } = require('eslint/use-at-your-own-risk');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  js.configs.recommended,
  ...compat.extends('plugin:react/recommended'),
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
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
];
