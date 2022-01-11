
import mongoose from 'mongoose';
//create the models
import '../models/Product.js';
const connectionStr = `mongodb://localhost:27017/Online_Store1`;

// connect() returns a Promise object
mongoose
    .connect( connectionStr )
    .then(() => {
        console.log( `connected to the DB` );
    })
    .catch(err => {
        console.log( err );
    });