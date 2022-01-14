import express from 'express';
import {
    getProducts,
    getProductById,
    postProduct,
    putProduct,
    deleteProduct
} from '../controllers/products.js';

// create a router
const router = express.Router();

router.get( '/', getProducts );
router.get( '/:_id', getProductById );
router.post( '/', postProduct );
router.put( '/:_id', putProduct );
router.delete( '/:_id', deleteProduct );

// module.exports = router

// exporting single item in ES2015 export syntax
export default router;