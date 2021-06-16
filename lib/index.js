module.exports = {

    rules: {
        'no-invalid-id-names': require( './rules/no-invalid-id-names.js' ),
        'newline-before-else': require( './rules/newline-before-else.js' ),
        'comments': require( './rules/comments.js' ),
    },

    configs: {

        nop: {

            parserOptions: {
                ecmaVersion: 2018,
                sourceType: 'module',
            },

            env: {
                'es6': true,
                'node': true,
                'browser': true,
            },

            plugins: [
                'nop',
            ],

            rules: {
                //  https://eslint.org/docs/rules/


                //  Possible Errors
                //
                'no-cond-assign': [ 'error', 'except-parens' ],
                'no-console': 'error',
                'no-constant-condition': [
                    'error',
                    {
                        checkLoops: false,
                    },
                ],
                'no-debugger': 'error',
                'no-dupe-args': 'error',
                'no-dupe-else-if': 'error',
                'no-dupe-keys': 'error',
                'no-duplicate-case': 'error',
                'no-empty': 'error',
                'no-ex-assign': 'error',
                'no-extra-boolean-cast': 'error',
                'no-extra-semi': 'error',
                'no-func-assign': 'error',
                'no-import-assign': 'error',
                'no-inner-declarations': 'error',
                'no-irregular-whitespace': 'error',
                'no-obj-calls': 'error',
                'no-promise-executor-return': 'error',
                'no-regex-spaces': 'error',
                'no-sparse-arrays': 'error',
                'no-template-curly-in-string': 'error',
                'no-unexpected-multiline': 'error',
                'no-unreachable': 'error',
                'no-unreachable-loop': 'error',
                'no-unsafe-finally': 'error',
                'no-unsafe-negation': 'error',
                'require-atomic-updates': 'error',
                'valid-typeof': 'error',


                //  Best Practices
                //
                'array-callback-return': 'error',
                'block-scoped-var': 'error',
                'class-methods-use-this': 'error',
                'consistent-return': 'error',
                'curly': 'error',
                'dot-location': [ 'error', 'property' ],
                'eqeqeq': [ 'error', 'allow-null' ],
                'no-caller': 'error',
                'no-case-declarations': 'error',
                'no-empty-function': 'error',
                'no-empty-pattern': 'error',
                'no-eval': 'error',
                'no-extend-native': 'error',
                'no-extra-bind': 'error',
                'no-fallthrough': 'error',
                'no-floating-decimal': 'error',
                'no-global-assign': 'error',
                'no-implicit-coercion': [
                    'error',
                    {
                        'number': false,
                        'allow': [ '!!' ],
                    },
                ],
                'no-implicit-globals': 'error',
                'no-implied-eval': 'error',
                'no-invalid-this': 'error',
                'no-lone-blocks': 'error',
                'no-loop-func': 'error',
                'no-multi-spaces': 'error',
                'no-multi-str': 'error',
                'no-new': 'error',
                'no-new-wrappers': 'error',
                'no-octal': 'error',
                'no-octal-escape': 'error',
                'no-redeclare': 'error',
                'no-return-assign': [ 'error', 'always' ],
                'no-return-await': 'error',
                'no-self-assign': 'error',
                'no-self-compare': 'error',
                'no-sequences': 'error',
                'no-throw-literal': 'error',
                'no-unmodified-loop-condition': 'error',
                'no-unused-expressions': 'error',
                'no-useless-call': 'error',
                'no-useless-catch': 'error',
                'no-useless-concat': 'error',
                'no-useless-return': 'error',
                'no-void': 'error',
                'no-with': 'error',
                'radix': [ 'error', 'always' ],
                'require-await': 'error',
                'wrap-iife': [ 'error', 'inside' ],
                'yoda': 'error',


                //  Variables
                //
                'no-delete-var': 'error',
                'no-undef': 'error',
                'no-undef-init': 'error',
                'no-undefined': 'error',
                'no-unused-vars': [
                    'error',
                    {
                        'vars': 'all',
                        'args': 'none',
                    },
                ],
                'no-use-before-define': [
                    'error',
                    {
                        'functions': false,
                    },
                ],


                //  Stylistic Issues
                //
                'array-bracket-newline': [ 'error', 'consistent' ],
                'array-bracket-spacing': [ 'error', 'always' ],
                'array-element-newline': [ 'error', 'consistent' ],
                'block-spacing': 'error',
                'brace-style': [ 'error', '1tbs' ],
                'comma-dangle': [ 'error', 'always-multiline' ],
                'comma-spacing': [
                    'error',
                    {
                        'before': false,
                        'after': true,
                    },
                ],
                'comma-style': [ 'error', 'last' ],
                'computed-property-spacing': [ 'error', 'always' ],
                'consistent-this': [ 'error', 'that' ],
                'eol-last': 'error',
                'func-call-spacing': 'error',
                'function-call-argument-newline': [ 'error', 'consistent' ],
                'function-paren-newline': [ 'error', 'consistent' ],
                'implicit-arrow-linebreak': [ 'error', 'beside' ],
                'indent': [
                    'error',
                    4,
                    {
                        SwitchCase: 1,
                    },
                ],
                'key-spacing': [
                    'error',
                    {
                        beforeColon: false,
                        afterColon: true,
                        mode: 'strict',
                    },
                ],
                'keyword-spacing': 'error',
                'line-comment-position': [
                    'error',
                    {
                        position: 'above',
                    },
                ],
                'linebreak-style': [ 'error', 'unix' ],
                'lines-between-class-members': [ 'error', 'always' ],
                'new-cap': [
                    'error',
                    {
                        'properties': false,
                    },
                ],
                'new-parens': 'error',
                'newline-per-chained-call': 'error',
                'no-array-constructor': 'error',
                'no-inline-comments': 'error',
                'no-mixed-operators': 'error',
                'no-mixed-spaces-and-tabs': 'error',
                'no-nested-ternary': 'error',
                'no-new-object': 'error',
                'no-tabs': 'error',
                'no-trailing-spaces': 'error',
                'no-unneeded-ternary': 'error',
                'no-whitespace-before-property': 'error',
                //  FIXME: Тут нужно свое правило написать.
                'object-curly-newline': [
                    'error',
                    {
                        consistent: true,
                    },
                ],
                'object-curly-spacing': [ 'error', 'always' ],
                'one-var': [ 'error', 'never' ],
                'operator-assignment': [ 'error', 'always' ],
                'operator-linebreak': [ 'error', 'after' ],
                'quote-props': [ 'error', 'consistent' ],
                'quotes': [ 'error', 'single' ],
                'semi': [ 'error', 'always' ],
                'semi-spacing': 'error',
                'semi-style': [ 'error', 'last' ],
                'space-before-blocks': 'error',
                'space-before-function-paren': [
                    'error',
                    {
                        named: 'never',
                        anonymous: 'never',
                        asyncArrow: 'always',
                    },
                ],
                'space-in-parens': [ 'error', 'always' ],
                'space-infix-ops': 'error',
                'space-unary-ops': 'error',
                'switch-colon-spacing': 'error',


                //  ECMAScript 6
                //
                /*
                //  FIXME: Нужно написать правило, требующее {} для многострочных выражений.
                'arrow-body-style': [
                    'error',
                    'as-needed',
                    {
                        requireReturnForObjectLiteral: true,
                    },
                ],
                */
                'arrow-parens': 'error',
                'arrow-spacing': 'error',
                'constructor-super': 'error',
                'generator-star-spacing': 'error',
                'no-class-assign': 'error',
                'no-confusing-arrow': 'error',
                'no-const-assign': 'error',
                'no-dupe-class-members': 'error',
                'no-duplicate-imports': 'error',
                'no-new-symbol': 'error',
                'no-this-before-super': 'error',
                'no-useless-computed-key': 'error',
                'no-useless-constructor': 'error',
                'no-useless-rename': 'error',
                'no-var': 'error',
                'object-shorthand': [ 'error', 'consistent' ],
                'prefer-const': 'error',
                'require-yield': 'error',
                'rest-spread-spacing': 'error',
                'template-curly-spacing': [ 'error', 'always' ],
                'yield-star-spacing': [ 'error', 'before' ],


                //  Custom rules
                //
                'nop/no-invalid-id-names': 'error',
                'nop/newline-before-else': 'error',
                'nop/comments': 'error',
            },

        },

    },

};

