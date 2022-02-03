import express from 'express';
import { getArticlesPage } from '../../controllers/pages/articles.js';

const router = express.Router();

router.get( '/', getArticlesPage );

export default router;