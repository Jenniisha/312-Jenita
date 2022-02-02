/**
 * Controller extracts information (query string parameters, path parameters etc., makes a call a call to the service to get data, and sends the response)
 */
// import { fetchProducts } from '../services/products.cjs';
import {
  fetchOrders,
  fetchOrderById,
  addOrder,
  updateOrder,
  removeOrder,
  
} from "../services/orders.js";
import HttpError from '../utils/HttpError.js';

// /products?sort=name&order=asc&minPrice=10&minRating=4&page=2&q=garden
const getOrders = (req, res, next) => {
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

  fetchOrders(sort, order, pageInt, q, minPrice, minRating)
    .then((orders) => {
        res.json(orders);
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
const getOrderById = (req, res, next) => {
  const { _id } = req.params;

  fetchOrderById(_id)
    .then((order) => {
      if( !order ) {
          // 404 -> Not Found
          const httpError = new HttpError( 'Order with given id does not exist', 404 );
          next( httpError );
          return;
      }

      res.json(order);
    })
    .catch((err) => {
      if( err.kind === 'ObjectId' ) {
          // 400 -> BAD REQUEST
          const httpError = new HttpError( 'Invalid order id', 400 );
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
const postOrder = (req, res, next) => {
  const { body } = req;
  console.log( Object.keys( body ) );

  // check if the body is an empty object
  if( Object.keys( body ).length === 0 ) {
    const httpError = new HttpError( 'Request body is empty. Order details are missing.', 400 );
    next( httpError );
    return;
  }

  addOrder( body )
    .then(order => {
      res.status( 201 ).json( order );
    })
    .catch(err => {
      const httpError = new HttpError( err.message, 400 );
      next( httpError );
    });
};

// PUT /products/:_id
const putOrder = ( req, res, next ) => {
  const { body } = req;
  const { _id } = req.params;

  // check if the body is an empty object
  if( Object.keys( body ).length === 0 ) {
    const httpError = new HttpError( 'Request body is empty. Order details are missing.', 400 );
    next( httpError );
    return;
  }

  updateOrder( _id, body )
    .then(order => {
      res.json( order );
    })
    .catch(err => {
      if( err.kind === 'ObjectId' ) {
        // 400 -> BAD REQUEST
        const httpError = new HttpError( 'Invalid order id', 400 );
        next( httpError );
      } else {
          // eg. DB connection error
          // 500 -> Internal Server Error
          const httpError = new HttpError( err.message, 500 );
          next( httpError );
      }
    });
};

const deleteOrder= ( req, res, next ) => {
  const { _id } = req.params;

  removeOrder( _id )
    .then(() => {
      res.status(204).json();
    })
    .catch(err => {
      if( err.kind === 'ObjectId' ) {
        // 400 -> BAD REQUEST
        const httpError = new HttpError( 'Invalid order id', 400 );
        next( httpError );
      } else {
          // eg. DB connection error
          // 500 -> Internal Server Error
          const httpError = new HttpError( err.message, 500 );
          next( httpError );
      }
    });
};




export { getOrders,getOrderById, postOrder, putOrder, deleteOrder};