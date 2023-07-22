module.exports = {
  extends: ['eslint:recommended', '@icehunter/react-app', 'plugin:jsx-a11y/recommended', 'prettier'],
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
    // disable the rule for all files
    '@typescript-eslint/explicit-function-return-type': 'off',
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
    'padding-line-between-statements': 'off',
    'prettier/prettier': 'error',
    radix: 'error',
    // to prevent issues with deps
    'react-hooks/exhaustive-deps': 'error',
    'sort-imports': ['error', { allowSeparatedGroups: true }]
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        '@icehunter/react-app',
        'plugin:jsx-a11y/recommended',
        'prettier'
      ],
      rules: {
        // enable the rule specifically for TypeScript files
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
      }
    }
  ],
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
