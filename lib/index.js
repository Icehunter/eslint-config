module.exports = {
  extends: ['eslint:recommended', 'react-app', 'plugin:jsx-a11y/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'jsx-a11y', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    jest: true,
    browser: true,
    es6: true,
    mocha: true,
    node: true
  },
  rules: {
    'sort-imports': 'error',
    'prettier/prettier': 'error',
    // to prevent issues with deps
    'react-hooks/exhaustive-deps': 'error',
    // disable the rule for all files
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'react-app',
        'plugin:jsx-a11y/recommended',
        'prettier'
      ],
      rules: {
        // enable the rule specifically for TypeScript files
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/no-explicit-any': 'error'
      }
    }
  ],
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
