import express from 'express';
import {getProducts,getProductById} from '../controllers/products.js';

// create a router
const router = express.Router();

router.get( '/products', getProducts );
router.get( '/products/:_id', getProductById );

// module.exports = router

// exporting single item in ES2015 export syntax
export default router;