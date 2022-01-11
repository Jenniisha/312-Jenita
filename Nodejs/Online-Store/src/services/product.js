/**
 * Service talks to the database (data layer)
 */
 const mongoose = require( 'mongoose' );
 const Product = mongoose.model( 'Product' );
 
 const fetchProducts = () => {
     return Product.find();
 };
 
 module.exports = {
     fetchProducts
 };
