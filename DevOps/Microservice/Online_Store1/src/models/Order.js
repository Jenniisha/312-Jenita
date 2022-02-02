import mongoose from 'mongoose';


// schema for product
const orderSchema = new mongoose.Schema({
    
    id: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: String,
        required: true
        
    },
    qty: {
        type: String,
        required: true,
    },
    order_date: {
        type: Date,
        required: true,
        default: Date.now
    },
    
});

// register the model
// collection - orders
mongoose.model( 'Order', orderSchema );