//connect to the DB
import '.data/index.js';
import express from 'express';
import productsRouter from './routes/products.js';
import usersRouter from './routes/users.js';

const app = express();

app.use( productsRouter );
app.use( usersRouter );

const PORT = process.env.PORT || 4000;

app.listen( PORT, err => {
    if( err ) {
        console.log( error.message );
        return;
    }

    console.log( `Started http://localhost:${PORT}` );
});