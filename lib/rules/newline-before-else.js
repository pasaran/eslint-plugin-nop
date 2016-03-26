"use strict";

const RX_NEWLINE = /\n\n\s*}$/;

module.exports = function( context ) {

    let source_code = context.getSourceCode();

    return {
        'IfStatement': function( node ) {
            if ( !node.alternate ) {
                return;
            }

            let then_node = node.consequent;
            let then_src = source_code.getText( then_node );

            if ( !RX_NEWLINE.test( then_src ) ) {
                let last_then_token = source_code.getLastToken( then_node );

                context.report( {
                    node: last_then_token,
                    message: 'No newline before else'
                } );
            }
        }
    };

};

