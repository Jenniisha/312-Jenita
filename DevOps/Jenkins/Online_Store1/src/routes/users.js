import express from 'express';
import { getUsers } from '../controllers/users.js';
import { authenticate, authorize } from '../middleware/auth.js';

// create a router
const router = express.Router();

// authorized for role = 'admin'
router.get( '/', authenticate, authorize( [ 'admin' ] ), getUsers );

// module.exports = router

// exporting single item in ES2015 export syntax
export default router;