import jwt from 'jsonwebtoken';
import HttpError from '../utils/HttpError.js';

const authenticate = ( req, res, next ) => {
    const Authorization = req.header( 'Authorization' );
    const token = Authorization.split( ' ' )[1];

    jwt.verify( token, 'shh...', ( err, claims ) => {
        if( err ) {
            const httpError = new HttpError( 'Your token seems to be invalid.', 401 );
            next( httpError );
            return;
        }

        // good to pass on claims to the next function - if user info is required it can extracted from claims
        res.locals.claims = claims;

        next();
    });
};

const authorize = ( roles ) => {
    return ( req, res, next ) => {
        if( !roles.includes( res.locals.claims.role ) ) {
            const httpError = new HttpError( 'Your do not have suficient privileges.', 403 );
            next( httpError );
            return;
        }

        next();
    };
};

export {
    authenticate,
    authorize
};