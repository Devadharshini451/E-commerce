import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Base JS rules
      ...js.configs.recommended.rules,

      // React rules
      ...react.configs.recommended.rules,

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // React Refresh rule for Vite fast refresh
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Custom overrides
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
