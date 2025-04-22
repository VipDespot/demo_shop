import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';

export default [
  {
      ignores: ['**/*.d.ts']
    },
    {
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        parserOptions: {
          project: './tsconfig.json'
        }
      },
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tsEslint,
      'react': reactPlugin
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.eslint.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    },
    rules: {
      "semi": ["error", "always"],
    "@typescript-eslint/semi": "off"
    }
  }
];
