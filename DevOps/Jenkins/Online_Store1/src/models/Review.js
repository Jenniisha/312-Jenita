import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    title: {
        type: String
    },
    reviewdOn: {
        type: Date,
        default: Date.now
    },
    text: {
        type: String,
        required: true
    }
});

export default reviewSchema;