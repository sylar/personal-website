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
    extends: ['next', 'prettier'], // Next.js and Prettier built-in configs
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
      'prettier/prettier': 'warn', // Enforce Prettier formatting
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
