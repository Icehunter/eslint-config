declare const _default: {
    extends: string;
    plugins: string[];
    parser: string;
    rules: {
        '@typescript-eslint/no-use-before-define': (string | {
            functions: boolean;
            classes: boolean;
            enums: boolean;
            variables: boolean;
            typedefs: boolean;
        })[];
        'react/forbid-foreign-prop-types': (string | {
            allowInPropTypes: boolean;
        })[];
        'react/jsx-no-comment-textnodes': string;
        'react/jsx-no-duplicate-props': string;
        'react/jsx-no-target-blank': string;
        'react/jsx-no-undef': string;
        'react/jsx-pascal-case': (string | {
            allowAllCaps: boolean;
            ignore: never[];
        })[];
        'react/no-danger-with-children': string;
        'react/no-direct-mutation-state': string;
        'react/no-is-mounted': string;
        'react/no-typos': string;
        'react/require-render-return': string;
        'react/style-prop-object': string;
        'react/jsx-closing-bracket-location': (string | number)[];
        'react/jsx-uses-vars': string;
        'react/jsx-uses-react': string;
        'jsx-a11y/alt-text': string;
        'jsx-a11y/anchor-has-content': string;
        'jsx-a11y/anchor-is-valid': (string | {
            aspects: string[];
        })[];
        'jsx-a11y/aria-activedescendant-has-tabindex': string;
        'jsx-a11y/aria-props': string;
        'jsx-a11y/aria-proptypes': string;
        'jsx-a11y/aria-role': (string | {
            ignoreNonDOM: boolean;
        })[];
        'jsx-a11y/aria-unsupported-elements': string;
        'jsx-a11y/heading-has-content': string;
        'jsx-a11y/iframe-has-title': string;
        'jsx-a11y/img-redundant-alt': string;
        'jsx-a11y/no-access-key': string;
        'jsx-a11y/no-distracting-elements': string;
        'jsx-a11y/no-redundant-roles': string;
        'jsx-a11y/role-has-required-aria-props': string;
        'jsx-a11y/role-supports-aria-props': string;
        'jsx-a11y/scope': string;
        'react-hooks/rules-of-hooks': string;
        'react-hooks/exhaustive-deps': string;
        '@typescript-eslint/adjacent-overload-signatures': string;
        '@typescript-eslint/array-type': (string | {
            default: string;
        })[];
        '@typescript-eslint/await-thenable': string;
        '@typescript-eslint/ban-ts-comment': (string | {
            'ts-expect-error': string;
            'ts-ignore': boolean;
            'ts-nocheck': boolean;
            'ts-check': boolean;
            minimumDescriptionLength: number;
        })[];
        '@typescript-eslint/ban-tslint-comment': string;
        '@typescript-eslint/ban-types': (string | {
            extendDefaults: boolean;
            types: {
                String: {
                    message: string;
                    fixWith: string;
                };
                Boolean: {
                    message: string;
                    fixWith: string;
                };
                Number: {
                    message: string;
                    fixWith: string;
                };
                Symbol: {
                    message: string;
                    fixWith: string;
                };
                BigInt: {
                    message: string;
                    fixWith: string;
                };
                Function: {
                    message: string;
                };
                Object: {
                    message: string;
                };
                '{}': {
                    message: string;
                };
            };
        })[];
        '@typescript-eslint/class-literal-property-style': string[];
        '@typescript-eslint/comma-dangle': (string | {
            arrays: string;
            objects: string;
            imports: string;
            exports: string;
            functions: string;
            enums: string;
            generics: string;
            tuples: string;
        })[];
        '@typescript-eslint/consistent-generic-constructors': string[];
        '@typescript-eslint/consistent-indexed-object-style': string[];
        '@typescript-eslint/consistent-type-assertions': (string | {
            assertionStyle: string;
            objectLiteralTypeAssertions: string;
        })[];
        '@typescript-eslint/consistent-type-definitions': string[];
        '@typescript-eslint/consistent-type-exports': (string | {
            fixMixedExportsWithInlineTypeSpecifier: boolean;
        })[];
        '@typescript-eslint/consistent-type-imports': (string | {
            prefer: string;
            disallowTypeAnnotations: boolean;
            fixStyle: string;
        })[];
        '@typescript-eslint/explicit-function-return-type': (string | {
            allowExpressions: boolean;
            allowHigherOrderFunctions: boolean;
            allowTypedFunctionExpressions: boolean;
            allowDirectConstAssertionInArrowFunctions: boolean;
        })[];
        '@typescript-eslint/member-delimiter-style': (string | {
            multiline: {
                delimiter: string;
            };
            singleline: {
                delimiter: string;
                requireLast: boolean;
            };
        })[];
        '@typescript-eslint/method-signature-style': string;
        '@typescript-eslint/naming-convention': (string | {
            selector: string;
            leadingUnderscore: string;
            trailingUnderscore: string;
            format: string[];
        })[];
        '@typescript-eslint/no-base-to-string': string;
        '@typescript-eslint/no-confusing-void-expression': (string | {
            ignoreArrowShorthand: boolean;
            ignoreVoidOperator: boolean;
        })[];
        '@typescript-eslint/no-dynamic-delete': string;
        '@typescript-eslint/no-empty-interface': (string | {
            allowSingleExtends: boolean;
        })[];
        '@typescript-eslint/no-extra-non-null-assertion': string;
        '@typescript-eslint/no-extraneous-class': (string | {
            allowWithDecorator: boolean;
        })[];
        '@typescript-eslint/no-floating-promises': string;
        '@typescript-eslint/no-for-in-array': string;
        '@typescript-eslint/no-implied-eval': string;
        '@typescript-eslint/no-invalid-void-type': string;
        '@typescript-eslint/no-misused-new': string;
        '@typescript-eslint/no-misused-promises': string;
        '@typescript-eslint/no-namespace': string;
        '@typescript-eslint/no-non-null-asserted-optional-chain': string;
        '@typescript-eslint/no-non-null-assertion': string;
        '@typescript-eslint/no-this-alias': (string | {
            allowDestructuring: boolean;
        })[];
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': string;
        '@typescript-eslint/no-unnecessary-type-assertion': string;
        '@typescript-eslint/no-unnecessary-type-constraint': string;
        '@typescript-eslint/no-var-requires': string;
        '@typescript-eslint/prefer-function-type': string;
        '@typescript-eslint/prefer-includes': string;
        '@typescript-eslint/prefer-nullish-coalescing': (string | {
            ignoreConditionalTests: boolean;
            ignoreMixedLogicalExpressions: boolean;
        })[];
        '@typescript-eslint/prefer-optional-chain': string;
        '@typescript-eslint/prefer-readonly': string;
        '@typescript-eslint/prefer-reduce-type-parameter': string;
        '@typescript-eslint/prefer-ts-expect-error': string;
        '@typescript-eslint/promise-function-async': string;
        '@typescript-eslint/require-array-sort-compare': (string | {
            ignoreStringArrays: boolean;
        })[];
        '@typescript-eslint/restrict-plus-operands': (string | {
            checkCompoundAssignments: boolean;
        })[];
        '@typescript-eslint/restrict-template-expressions': (string | {
            allowNumber: boolean;
        })[];
        '@typescript-eslint/return-await': string[];
        '@typescript-eslint/strict-boolean-expressions': (string | {
            allowString: boolean;
            allowNumber: boolean;
            allowNullableObject: boolean;
            allowNullableBoolean: boolean;
            allowNullableString: boolean;
            allowNullableNumber: boolean;
            allowAny: boolean;
        })[];
        '@typescript-eslint/triple-slash-reference': (string | {
            lib: string;
            path: string;
            types: string;
        })[];
        '@typescript-eslint/type-annotation-spacing': string;
        'no-void': (string | {
            allowAsStatement: boolean;
        })[];
        'import/order': (string | {
            groups: string[];
            'newlines-between': string;
            alphabetize: {
                order: string;
                orderImportKind: string;
                caseInsensitive: boolean;
            };
        })[];
        'comma-dangle': string[];
        complexity: (string | number)[];
        'default-param-last': string;
        'func-style': string[];
        'no-restricted-imports': (string | {
            paths: {
                name: string;
                message: string;
            }[];
        })[];
        radix: string;
        'no-restricted-globals': string[];
        'max-len': (string | {
            code: number;
            tabWidth: number;
        })[];
        semi: string[];
        '@typescript-eslint/no-explicit-any': string;
        '@typescript-eslint/padding-line-between-statements': (string | {
            blankLine: string;
            prev: string;
            next: string;
        } | {
            blankLine: string;
            prev: string;
            next: string[];
        })[];
        camelcase: string;
        'no-use-before-define': string;
        'no-undef': string;
    };
};
export = _default;
