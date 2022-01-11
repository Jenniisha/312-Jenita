import express from 'express';

const app = express();

app.get( '/products', ( req, res ) => {
    res.send( 'We will send the list of products' );
});

// Send a message when client requests for /users
app.get( '/users', ( req, res ) => {
    res.send( 'We will send the list of users' );
});

const PORT = process.env.PORT || 4000;

app.listen( PORT, err => {
    if( err ) {
        console.log( error.message );
        return;
    }

    console.log( `Started http://localhost:${PORT}` );
}); 