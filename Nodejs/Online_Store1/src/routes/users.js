import express from 'express';
import { getUsers } from '../controllers/users.js';

// create a router
const router = express.Router();

router.get( '/users', getUsers );

// module.exports = router

// exporting single item in ES2015 export syntax
export default router;