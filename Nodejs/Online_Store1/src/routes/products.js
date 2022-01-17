import express from 'express';
import {
    getProducts,
    getProductById,
    postProduct,
    putProduct,
    deleteProduct,
    postReview,
    getReviews
} from '../controllers/products.js';
import { authenticate } from '../middleware/auth.js';

// create a router
const router = express.Router();

// any user
router.get(    '/'    , getProducts );
router.get(    '/:_id', getProductById );

// authorized for role = 'admin'
router.post(   '/'    , authenticate, postProduct );
router.put(    '/:_id', authenticate, putProduct );
router.delete( '/:_id', authenticate, deleteProduct );

// any user
router.get(    '/:_id/reviews', getReviews );

// authenticated users (logged-in users)
router.post(   '/:_id/reviews', authenticate, postReview );

// module.exports = router

// exporting single item in ES2015 export syntax
export default router;