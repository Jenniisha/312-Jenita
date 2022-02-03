import express from "express";
import {
  getArticles,
  getArticleById,
  postArticle,
  putArticle,
  deleteArticle,
  postComment,
  getComments,
} from "../controllers/articles.js";
import { authenticate, authorize } from "../middleware/auth.js";



const router = express.Router();

// Send a message when client requests for /articles
router.get("/", getArticles);
router.get("/:_id", getArticleById);

// logged-in user
router.post("/", authenticate, authorize("name"), postArticle);
router.put("/:_id", authenticate, authorize("name"), putArticle);
router.delete("/:_id", authenticate, authorize("name"), deleteArticle);

// any user
router.get("/:_id/comments", getComments);

// loggged-in user
router.post("/:_id/comments", authenticate, authorize("name"), postComment);

export default router;