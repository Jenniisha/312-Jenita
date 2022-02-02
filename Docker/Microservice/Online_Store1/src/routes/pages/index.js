import express from 'express';
import { getHomePage } from '../../controllers/pages/index.js';

const router = express.Router();

router.get( '/', getHomePage );

export default router;