/**
 * Controller extracts information (query string parameters, path parameters etc., makes a call a call to the service to get data, and sends the response)
 */
// import { fetchProducts } from '../services/products.cjs';
import {
  fetchProducts,
  fetchProductById,
  addProduct,
  updateProduct,
  removeProduct,
  addReview,
  fetchReviews
} from "../services/products.js";
import HttpError from '../utils/HttpError.js';

// /products?sort=name&order=asc&minPrice=10&minRating=4&page=2&q=garden
const getProducts = (req, res, next) => {
  // Extract minPrice from query string and log it as well
  let { sort, order, minPrice, minRating, page, q } = req.query;

  // convert page to integer, and set a default of 1 if it is not passed / incorrect
  let pageInt = parseInt(page); // parseInt( 'hello' ) -> NaN, parseInt( undefined ) -> NaN

  if (isNaN(pageInt)) {
    pageInt = 1;
  }

  // if sort field is not passed, we assume it is sorted by name
  if (!sort) {
    sort = "name";
  }

  // if sorting order is not passed, we assume it is sorted in ascending order
  if (!order) {
    order = "asc";
  }

  fetchProducts(sort, order, pageInt, q, minPrice, minRating)
    .then((products) => {
        res.json(products);
    })
    .catch((err) => {
        // eg. DB connection error
        // 500 -> Internal Server Error
        const httpError = new HttpError( err.message, 500 );
        next( httpError );
    });
};

// GET /products/:_id
// Example: /products/61dd7711cbf3176114766adb
const getProductById = (req, res, next) => {
  const { _id } = req.params;

  fetchProductById(_id)
    .then((product) => {
      if( !product ) {
          // 404 -> Not Found
          const httpError = new HttpError( 'Product with given id does not exist', 404 );
          next( httpError );
          return;
      }

      res.json(product);
    })
    .catch((err) => {
      if( err.kind === 'ObjectId' ) {
          // 400 -> BAD REQUEST
          const httpError = new HttpError( 'Invalid product id', 400 );
          next( httpError );
      } else {
          // eg. DB connection error
          // 500 -> Internal Server Error
          const httpError = new HttpError( err.message, 500 );
          next( httpError );
      }
    });
};

// POST /products
const postProduct = (req, res, next) => {
  const { body } = req;
  console.log( Object.keys( body ) );

  // check if the body is an empty object
  if( Object.keys( body ).length === 0 ) {
    const httpError = new HttpError( 'Request body is empty. Product details are missing.', 400 );
    next( httpError );
    return;
  }

  addProduct( body )
    .then(product => {
      res.status( 201 ).json( product );
    })
    .catch(err => {
      const httpError = new HttpError( err.message, 400 );
      next( httpError );
    });
};

// PUT /products/:_id
const putProduct = ( req, res, next ) => {
  const { body } = req;
  const { _id } = req.params;

  // check if the body is an empty object
  if( Object.keys( body ).length === 0 ) {
    const httpError = new HttpError( 'Request body is empty. Product details are missing.', 400 );
    next( httpError );
    return;
  }

  updateProduct( _id, body )
    .then(product => {
      res.json( product );
    })
    .catch(err => {
      if( err.kind === 'ObjectId' ) {
        // 400 -> BAD REQUEST
        const httpError = new HttpError( 'Invalid product id', 400 );
        next( httpError );
      } else {
          // eg. DB connection error
          // 500 -> Internal Server Error
          const httpError = new HttpError( err.message, 500 );
          next( httpError );
      }
    });
};

const deleteProduct = ( req, res, next ) => {
  const { _id } = req.params;

  removeProduct( _id )
    .then(() => {
      res.status(204).json();
    })
    .catch(err => {
      if( err.kind === 'ObjectId' ) {
        // 400 -> BAD REQUEST
        const httpError = new HttpError( 'Invalid product id', 400 );
        next( httpError );
      } else {
          // eg. DB connection error
          // 500 -> Internal Server Error
          const httpError = new HttpError( err.message, 500 );
          next( httpError );
      }
    });
};

// POST /:_id/reviews
const postReview = (req, res, next) => {
  const { _id } = req.params;
  const { body } = req;

  // check if the body is an empty object
  if( Object.keys( body ).length === 0 ) {
    const httpError = new HttpError( 'Request body is empty. Review details are missing.', 400 );
    next( httpError );
    return;
  }

  addReview( _id, body )
    .then(product => {
      res.status( 201 ).json( product );
    })
    .catch(err => {
      const httpError = new HttpError( err.message, 400 );
      next( httpError );
    });
};

const getReviews = (req, res, next) => {
  const { _id } = req.params;

  fetchReviews( _id )
    .then((reviews) => {
        res.json(reviews);
    })
    .catch((err) => {
        const httpError = new HttpError( err.message, 500 );
        next( httpError );
    });
}

export { getProducts, getProductById, postProduct, putProduct, deleteProduct, postReview, getReviews };