/**
 * Service talks to the database (data layer)
 */
import mongoose from "mongoose";
import config from "../utils/config.js";

const Article = mongoose.model("Article");

const fetchArticles = (sort, order, page, q) => {
  const skipClause = (page - 1) * config.PAGE_SIZE;

  const filterClause = {};
  if (q) {
    filterClause.abstract = {
      $regex: q,
      $options: "i",
    };
  }

  const sortClause = {
    [sort]: order === "desc" ? -1 : 1,
  };
  return Article.find(filterClause)
    .select("name title abstract articleBody imageUrl createdAt comments")
    .sort(sortClause)
    .skip(skipClause)
    .limit(config.PAGE_SIZE);
};

const fetchArticleById = (_id) => {
  return Article.findById(_id);
};

const addArticle = (article) => {
  return Article.create(article);
};
const updateArticle = (_id, newArticleDetails) => {
  return Article.findByIdAndUpdate(_id, newArticleDetails, {
    new: true,
    runValidators: true,
  });
};

const removeArticle = (_id) => {
  return Article.findByIdAndRemove(_id);
};

const addComment = (_id, review) => {
  return Article.findByIdAndUpdate(
    _id,
    {
      $push: {
        comments: comm,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );
};

const fetchComments = (_id) => {
  return Article.findById(_id)
    .select("comments")
    .then((articleComments) => articleComments.comments);
};

export {
  fetchArticles,
  fetchArticleById,
  addArticle,
  updateArticle,
  removeArticle,
  addComment,
  fetchComments,
};