/**
 * Controller extracts information (query string parameters, path parameters etc., makes a call a call to the service to get data, and sends the response)
 */
 import { fetchProducts } from '../services/products.cjs';

 const getProducts = ( req, res ) => {
     res.json( fetchProducts() );
 };
 
 export {
     getProducts
 };