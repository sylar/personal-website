import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import prettierPlugin from 'eslint-plugin-prettier'

// Needed for `import.meta.dirname` fallback (Node < 20.11.0)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Create a FlatCompat instance
const compat = new FlatCompat({
  baseDirectory: __dirname
})

// Export a merged config array
export default [
  // 1) Convert old-style `extends` into flat-config
  //    Add whichever Next.js configs you need: 'next', 'next/core-web-vitals', 'next/typescript', 'prettier', etc.
  ...compat.extends(
    'next', // Loads Next.js plugin/config
    'next/core-web-vitals',
    'next/typescript', // If you rely on Next.js TypeScript rules
    'prettier'
  ),

  // 2) Add your custom flat-config overrides/rules
  {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    // Plugins can still be declared here if you want to reference them directly in `rules`
    plugins: {
      '@typescript-eslint': tsParser,
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
