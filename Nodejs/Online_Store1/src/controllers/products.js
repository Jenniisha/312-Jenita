/**
 * Controller extracts information (query string parameters, path parameters etc., makes a call a call to the service to get data, and sends the response)
 */
// import { fetchProducts } from '../services/products.cjs';
import {
    fetchProducts,
    fetchProductById
} from "../services/products.js";

// /products?sort=name&order=asc&minPrice=10&minRating=4&page=2
const getProducts = ( req, res ) => {
    // Extract minPrice from query string and log it as well
    let { sort, order, minPrice, minRating, page,q } = req.query;

    // convert page to integer, and set a default of 1 if it is not passed / incorrect
    let pageInt = parseInt( page ); // parseInt( 'hello' ) -> NaN, parseInt( undefined ) -> NaN

    if( isNaN( pageInt ) ) {
        pageInt = 1;
    }

    // if sort field is not passed, we assume it is sorted by name
    if( !sort ) {
        sort = 'name';
    }

    // if sorting order is not passed, we assume it is sorted in ascending order
    if( !order ) {
        order = 'asc';
    }
    
    fetchProducts( sort, order, pageInt,q, minPrice, minRating )
        .then(products => {
            res.json( products );
        })
        .catch(err => {
            res.json(err.message);
        });
};

// GET /products/:_id
// Example: /products/61dd7711cbf3176114766adb
const getProductById = ( req, res ) => {
    const { _id } = req.params;

    fetchProductById( _id )
        .then(product => {
            res.json( product )
        })
        .catch(err => {
            res.json( err.message );
        });
}

export {
    getProducts,
    getProductById
};