// connect to the DB
import './data/index.js';

import express from 'express';

import productsRouter from './routes/products.js';
import usersRouter from './routes/users.js';

import indexRouter from './routes/pages/index.js';
import productsPageRouter from './routes/pages/products.js';

import authRouter from './routes/auth.js';

import HttpError from './utils/HttpError.js';
import fs from 'fs';
import path from 'path';

const app = express();

app.set( 'views', path.join( process.cwd(), 'src', 'views' ) );
app.set( 'view engine', 'ejs' );

// custom middleware
app.use(( req, res, next ) => {
    const logMessage = `${req.method} ${req.url} at time ${new Date().toTimeString()}\n`;

    fs.writeFile( path.join( process.cwd(), 'src', 'server.log' ), logMessage, { encoding: 'utf-8', flag: 'a+' }, ( err ) => {
        if( err ) {
            console.log( err.message );
        }

        next(); // pass control to the next middleware
    });
});

app.use( express.static( path.join( process.cwd(), 'src', 'public' ) ) );

// extracts JSON data from request body and sets it up on req.body
app.use( express.json() );
// extracts JSON data from a form and sets it up on req.body
app.use( express.urlencoded() );

app.use( '/auth', authRouter );
app.use( '/products', productsRouter );
app.use( '/users', usersRouter );

app.use( '/', indexRouter );
app.use( '/page/products', productsPageRouter );

app.use(( req, res, next ) => {
    const httpError = new HttpError( 'Resource not found', 404 );
    next( httpError );
});

// error-handling middleware
app.use(( httpError, req, res, next ) => {
    res.status( httpError.statusCode || 500 ).json({
        message: httpError.message
    });
});

const PORT = process.env.PORT || 4000;

app.listen( PORT, err => {
    if( err ) {
        console.log( error.message );
        return;
    }

    console.log( `Started http://localhost:${PORT}` );
});