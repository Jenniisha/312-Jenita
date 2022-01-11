import express from 'express';
import { getProducts}from '../controllers/products.js';

// create a router
const router = express.Router();

router.get( '/products',getProducts);




// module.exports = router

// exporting single item in ES2015 export syntax
export default router; 