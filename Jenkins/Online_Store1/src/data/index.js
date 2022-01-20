import mongoose from 'mongoose';

// create the models
import '../models/Product.js';
import '../models/User.js';

const connectionStr = `mongodb://0.0.0.0:27017/Online_Store1`;

// connect() returns a Promise object
mongoose
    .connect( connectionStr )
    .then(() => {
        console.log( `connected to the DB` );
    })
    .catch(err => {
        console.log( err.message );
    });