import express from 'express';
import {
    getOrders,
    getOrderById,
    postOrder,
    putOrder,
    deleteOrder,
    
} from '../controllers/orders.js';
import { authenticate } from '../middleware/auth.js';

// create a router
const router = express.Router();

// any user
router.get(    '/'    , getOrders);
router.get(    '/:_id', getOrderById );

// authorized for role = 'admin'
router.post(   '/'    , postOrder );
router.put(    '/:_id',  putOrder );
router.delete( '/:_id',  deleteOrder );



// module.exports = router

// exporting single item in ES2015 export syntax
export default router;