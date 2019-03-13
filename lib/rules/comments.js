'use strict';

module.exports = function( context ) {

    const source_code = context.getSourceCode();

    return {
        'Program': function() {
            const comments = source_code.getAllComments();

            for ( let i = 0, l = comments.length; i < l; i++ ) {
                const comment = comments[ i ];
                const value = comment.value;

                switch ( comment.type ) {
                    case 'Block':
                        if ( value.charAt( 0 ) === '*' ) {
                            context.report( {
                                node: comment,
                                message: 'No JSDocs allowed',
                            } );
                        }

                        break;

                    case 'Line':
                        if ( value !== '' && value.substr( 0, 2 ) !== '  ' ) {
                            context.report( {
                                node: comment,
                                message: 'Line comment should start with 2 spaces',
                            } );
                        }

                        break;
                }
            }

        },
    };

};

