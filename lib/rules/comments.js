'use strict';

module.exports = function( context ) {

    let source_code = context.getSourceCode();

    return {
        'Program': function() {
            let comments = source_code.getAllComments();

            for ( let i = 0, l = comments.length; i < l; i++ ) {
                let comment = comments[ i ];
                let value = comment.value;

                switch ( comment.type ) {
                    case 'Block':
                        if ( value.charAt( 0 ) === '*' ) {
                            context.report( {
                                node: comment,
                                message: 'No JSDocs allowed'
                            } );
                        }

                        break;

                    case 'Line':
                        if ( value !== '' && value.substr( 0, 2 ) !== '  ' ) {
                            context.report( {
                                node: comment,
                                message: 'Line comment should start with 2 spaces'
                            } );
                        }

                        break;
                }
            }

        }
    };

};

