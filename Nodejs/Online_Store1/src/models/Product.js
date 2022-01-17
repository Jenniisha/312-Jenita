import mongoose from 'mongoose';
import reviewSchema from './Review.js';

// schema for product
const productSchema = new mongoose.Schema({
    reviews: {
        type: [ reviewSchema ],
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    releaseDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        default: 4
    },
    imageUrl: {
        type: String,
        required: false
    }
});

// register the model
// collection - products
mongoose.model( 'Product', productSchema );