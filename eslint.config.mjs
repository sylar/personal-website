import tsParser from '@typescript-eslint/parser'
import globals from 'globals'
import prettier from 'eslint-plugin-prettier'

export default [
  {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
    plugins: {
      '@typescript-eslint': tsParser,
      prettier
    },
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'plugin:@next/next/recommended',
      'prettier' // Prettier for formatting
    ],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest', // Modern JavaScript features
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'prettier/prettier': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ]
    }
  }
]
