module.exports = {

    rules: {
        'no-invalid-id-names': require( './rules/no-invalid-id-names.js' ),
        'newline-before-else': require( './rules/newline-before-else.js' )
    },

    configs: {

        nop: {

            parserOptions: {
                ecmaVersion: 6
            },

            env: {
                'es6': true,
                'node': true
            },

            plugins: [
                'nop'
            ],

            rules: {
                'no-cond-assign': [ 'error', 'except-parens' ],
                'no-dupe-args': 'error',
                'no-dupe-keys': 'error',
                'no-duplicate-case': 'error',
                'no-empty': 'error',
                'no-ex-assign': 'error',
                'no-func-assign': 'error',
                'no-inner-declarations': 'error',
                'no-irregular-whitespace': 'error',
                'no-sparse-arrays': 'error',
                'no-unexpected-multiline': 'error',
                'no-unreachable': 'error',
                'valid-typeof': 'error',

                //  'block-scoped-var': 'error',
                'curly': 'error',
                'dot-location': [ 'error', 'property' ],
                'eqeqeq': [ 'error', 'allow-null' ],
                'no-caller': 'error',
                'no-empty-function': 'error',
                'no-eval': 'error',
                'no-extend-native': 'error',
                'no-fallthrough': 'error',
                'no-floating-decimal': 'error',
                'no-implicit-coercion': [
                    'error',
                    {
                        'number': false,
                        'allow': [ '!!' ]
                    }
                ],
                'no-implied-eval': 'error',
                //  FIXME: Включить strict.
                'no-invalid-this': 'error',
                'no-lone-blocks': 'error',
                'no-loop-func': 'error',
                'no-multi-spaces': 'error',
                'no-multi-str': 'error',
                'no-new': 'error',
                'no-new-wrappers': 'error',
                'no-octal': 'error',
                'no-octal-escape': 'error',
                'no-return-assign': [ 'error', 'always' ],
                'no-sequences': 'error',
                'no-throw-literal': 'error',
                'no-unused-expressions': 'error',
                'no-useless-call': 'error',
                'no-useless-concat': 'error',
                'no-void': 'error',
                'no-with': 'error',
                'radix': [ 'error', 'always' ],
                'wrap-iife': [ 'error', 'inside' ],
                'yoda': 'error',

                'no-delete-var': 'error',
                'no-undef': 'error',
                'no-undef-init': 'error',
                'no-unused-vars': [
                    'error',
                    {
                        'vars': 'all',
                        'args': 'none'
                    }
                ],
                'no-use-before-define': [
                    'error',
                    {
                        'functions': false
                    }
                ],

                //  'global-require': 'error',
                'no-new-require': 'error',
                'no-path-concat': 'error',

                'array-bracket-spacing': [ 'error', 'always' ],
                'brace-style': [ 'error', '1tbs' ],
                'no-inline-comments': 'error',

                'quotes': [ 'error', 'single' ],
                'semi': [ 'error', 'always' ],
                'no-nested-ternary': 'error',

                'nop/no-invalid-id-names': 'error',
                'nop/newline-before-else': 'error'
            }

        }

    }

};

