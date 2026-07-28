import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

const sharedGlobals = {
  cancelAnimationFrame: 'readonly',
  console: 'readonly',
  document: 'readonly',
  fetch: 'readonly',
  process: 'readonly',
  requestAnimationFrame: 'readonly',
  Request: 'readonly',
  Response: 'readonly',
  URL: 'readonly',
  window: 'readonly',
  setTimeout: 'readonly',
  clearTimeout: 'readonly',
  queueMicrotask: 'readonly',
  AbortController: 'readonly',
  FormData: 'readonly',
}

export default tseslint.config(
  {
    ignores: ['build/**', 'dist/**', 'node_modules/**', '.react-router/**', '.eslintrc.cjs'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['app/**/*.{js,jsx,ts,tsx}', 'workers/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: sharedGlobals,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'react/prop-types': 'off',
      'react-refresh/only-export-components': 'off',
    },
  },
)
