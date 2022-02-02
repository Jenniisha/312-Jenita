import express from 'express';
import {
    getUsers,
    getUserById,
    postUser,
    putUser,
    deleteUser
} from '../controllers/users.js';
import { authenticate } from '../middleware/auth.js';

// create a router
const router = express.Router();

// any user
router.get(    '/'    , getUsers);
router.get(    '/:_id', getUserById );

// authorized for role = 'admin'
router.post(   '/'    , authenticate, postUser );
router.put(    '/:_id', authenticate, putUser );
router.delete( '/:_id', authenticate, deleteUser );



// module.exports = router

// exporting single item in ES2015 export syntax
export default router;