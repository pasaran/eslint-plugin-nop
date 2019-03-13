'use strict';

const RX_NEWLINE = /\n\n\s*}$/;

module.exports = function( context ) {

    const source_code = context.getSourceCode();

    return {
        'IfStatement': function( node ) {
            if ( !node.alternate ) {
                return;
            }

            const then_node = node.consequent;
            const then_src = source_code.getText( then_node );

            if ( !RX_NEWLINE.test( then_src ) ) {
                const last_then_token = source_code.getLastToken( then_node );

                context.report( {
                    node: last_then_token,
                    message: 'No newline before else',
                } );
            }
        },
    };

};

