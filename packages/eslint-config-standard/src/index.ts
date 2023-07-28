import restrictedGlobals from 'confusing-browser-globals';
import { type Linter } from 'eslint';
import configStandard from './eslint-config-standard';

const equivalents = [
  'block-spacing',
  'comma-spacing',
  'dot-notation',
  'brace-style',
  'func-call-spacing',
  'indent',
  'key-spacing',
  'keyword-spacing',
  'lines-between-class-members',
  'no-array-constructor',
  'no-dupe-class-members',
  'no-extra-parens',
  'no-loss-of-precision',
  'no-redeclare',
  'no-throw-literal',
  'no-unused-vars',
  'no-unused-expressions',
  'no-useless-constructor',
  'object-curly-spacing',
  'quotes',
  'semi',
  'space-before-blocks',
  'space-before-function-paren',
  'space-infix-ops'
] as const;

const ruleFromStandard = (name: string): Linter.RuleEntry => {
  if (configStandard.rules === undefined) throw new Error();
  const rule = configStandard.rules[name];
  if (rule === undefined) throw new Error();
  if (typeof rule !== 'object') return rule;
  return JSON.parse(JSON.stringify(rule));
};

function fromEntries<T>(iterable: Array<[string, T]>): Record<string, T> {
  return [...iterable].reduce<Record<string, T>>((obj, [key, val]) => {
    obj[key] = val;
    return obj;
  }, {});
}

export = {
  extends: 'eslint-config-standard',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  parser: '@typescript-eslint/parser',
  rules: {
    // 'comma-dangle': 'off',

    // TypeScript has this functionality by default:
    'no-undef': 'off',

    // Rules replaced by @typescript-eslint versions:
    ...fromEntries(equivalents.map((name) => [name, 'off'])),
    camelcase: 'off',
    'no-use-before-define': 'off',

    // @typescript-eslint versions of Standard.js rules:
    ...fromEntries(equivalents.map((name) => [`@typescript-eslint/${name}`, ruleFromStandard(name)])),
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        enums: false,
        variables: false,
        typedefs: false // Only the TypeScript rule has this option.
      }
    ],

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': 'warn',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: true,
        ignore: []
      }
    ],
    'react/no-danger-with-children': 'warn',
    // Disabled because of undesirable warnings
    // See https://github.com/facebook/create-react-app/issues/5204 for
    // blockers until its re-enabled
    // 'react/no-deprecated': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-is-mounted': 'warn',
    'react/no-typos': 'error',
    'react/require-render-return': 'error',
    'react/style-prop-object': 'warn',
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    'react/jsx-uses-vars': 'warn',
    'react/jsx-uses-react': 'warn',

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['noHref', 'invalidHref']
      }
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-role': ['warn', { ignoreNonDOM: true }],
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/heading-has-content': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key': 'warn',
    'jsx-a11y/no-distracting-elements': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/scope': 'warn',

    // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // Rules exclusive to Standard TypeScript:
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 3
      }
    ],
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: false,
        types: {
          String: {
            message: 'Use string instead',
            fixWith: 'string'
          },
          Boolean: {
            message: 'Use boolean instead',
            fixWith: 'boolean'
          },
          Number: {
            message: 'Use number instead',
            fixWith: 'number'
          },
          Symbol: {
            message: 'Use symbol instead',
            fixWith: 'symbol'
          },
          BigInt: {
            message: 'Use bigint instead',
            fixWith: 'bigint'
          },
          Function: {
            message: [
              'The `Function` type accepts any function-like value.',
              'It provides no type safety when calling the function, which can be a common source of bugs.',
              'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
              'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.'
            ].join('\n')
          },
          // object typing
          Object: {
            message: [
              'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
              '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
              '- If you want a type meaning "any value", you probably want `unknown` instead.'
            ].join('\n')
          },
          '{}': {
            message: [
              '`{}` actually means "any non-nullish value".',
              '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
              '- If you want a type meaning "any value", you probably want `unknown` instead.'
            ].join('\n')
          }
        }
      }
    ],
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never',
        enums: 'ignore',
        generics: 'ignore',
        tuples: 'ignore'
      }
    ],
    '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never'
      }
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: true
      }
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
        fixStyle: 'inline-type-imports'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
        allowDirectConstAssertionInArrowFunctions: true
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: { delimiter: 'none' },
        singleline: { delimiter: 'comma', requireLast: false }
      }
    ],
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE']
      }
    ],
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: false, ignoreVoidOperator: false }
    ],
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      { ignoreConditionalTests: false, ignoreMixedLogicalExpressions: false }
    ],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
    '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],
    '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
    '@typescript-eslint/return-await': ['error', 'always'],
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false
      }
    ],
    '@typescript-eslint/triple-slash-reference': ['error', { lib: 'never', path: 'never', types: 'never' }],
    '@typescript-eslint/type-annotation-spacing': 'error',
    'no-void': ['error', { allowAsStatement: true }],

    // Rules specfic to me :)
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

    'comma-dangle': ['error', 'always-multiline'],
    complexity: ['error', 10],
    'default-param-last': 'error',
    'func-style': ['error', 'expression'],
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
    radix: 'error',
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'max-len': [
      'error',
      {
        code: 160,
        tabWidth: 2
      }
    ],
    semi: ['error', 'always'],

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
};
