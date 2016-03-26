'use strict';

const ERRORS = {
    INVALID_FUNCTION_NAME: 'Invalid function name "{{ name }}"',
    INVALID_VARIABLE_NAME: 'Invalid variable name "{{ name }}"',
    INVALID_PARAM_NAME: 'Invalid param name "{{ name }}"'
};

const RX_VALID_NAME = /^(?:\$?[a-z0-9_]+|[A-Z0-9_]+|_?(?:[A-Z][a-z0-9]*)+_?)$/;

module.exports = function( context ) {

    return {
        'VariableDeclarator': check_variable,
        'FunctionDeclaration': check_function,
        'FunctionExpression': check_function
    };

    function check_variable( node ) {
        check_name( node.id, ERRORS.INVALID_VARIABLE_NAME );
    }

    function check_function( node ) {
        if ( node.id ) {
            check_name( node.id, ERRORS.INVALID_FUNCTION_NAME );
        }

        let params = node.params;
        for ( let i = 0, l = params.length; i < l; i++ ) {
            let param = params[ i ];

            switch ( param.type ) {
                case 'Identifier':
                    check_name( param, ERRORS.INVALID_PARAM_NAME );
                    break;

                case 'AssignmentPattern':
                    check_name( param.left, ERRORS.INVALID_PARAM_NAME );
                    break;

                case 'RestElement':
                    check_name( param.argument, ERRORS.INVALID_PARAM_NAME );
                    break;
            }
        }
    }

    function check_name( node, error_message ) {
        let name = node.name;

        if ( !is_valid_name( name ) ) {
            context.report( {
                node: node,
                message: error_message,
                data: {
                    name: name
                }
            } );
        }
    }

    function is_valid_name( name ) {
        return RX_VALID_NAME.test( name );
    }

};

