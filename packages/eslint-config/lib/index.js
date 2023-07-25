module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    '@icehunter/react-app',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
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
    'arrow-parens': 'error',
    camelcase: [
      'error',
      {
        ignoreDestructuring: true,
        ignoreImports: true,
        ignoreGlobals: true,
        allow: []
      }
    ],
    complexity: ['error', 10],
    'consistent-return': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    'func-style': ['error', 'expression'],
    'lines-between-class-members': 2,
    'no-await-in-loop': 'error',
    'no-constant-binary-expression': 'error',
    'no-nested-ternary': 'error',
    'no-unreachable-loop': 'warn',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            message: 'Please use ramnda instead.'
          }
        ]
      }
    ],
    'prettier/prettier': 'error',
    radix: 'error',
    // to prevent issues with deps
    'react-hooks/exhaustive-deps': 'error',
    'import/order': [
      'error',
      {
        groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin', 'object', 'type'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          orderImportKind:
            'asc' /* sort in ascending order various import kinds, e.g. imports prefixed with type or typeof, with same import path. Use desc to sort in descending order (default: ignore) */,
          caseInsensitive: false /* ignore case. Options: [true, false] */
        }
      }
    ],
    '@typescript-eslint/explicit-function-return-type': ['error'],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'block-like'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['multiline-expression']
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'export'
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      typescript: {},
      node: {
        moduleDirectory: ['node_modules', 'src/']
      }
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    }
  }
};
