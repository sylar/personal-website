import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettierPlugin from 'eslint-plugin-prettier'
import globals from 'globals'

// Needed for `import.meta.dirname` fallback (Node < 20.11.0)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Create a FlatCompat instance
const compat = new FlatCompat({
  baseDirectory: __dirname
})

export default [
  ...compat.extends(
    'next',
    'next/core-web-vitals',
    'next/typescript',
    'prettier'
  ),
  {
    ignores: ['.next', 'scripts']
  },
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ]
    }
  }
]
