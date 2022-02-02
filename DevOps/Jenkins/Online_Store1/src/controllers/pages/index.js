const getHomePage = ( req, res, next ) => {
    res.render( 'index' );
};

export {
    getHomePage
};