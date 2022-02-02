/**
 * Service talks to the database (data layer)
 */
 const products = require( '../data/products' );

 const fetchProducts = () => products;
 
 module.exports = {
     fetchProducts
 };