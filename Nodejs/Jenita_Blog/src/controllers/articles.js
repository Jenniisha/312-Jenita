import {
  fetchArticles,
  fetchArticleById,
  addArticle,
  updateArticle,
  removeArticle,
  addComment,
  fetchComments,
} from "../services/articles.js";
import HttpError from "../utils/HttpError.js";


const getArticles = (req, res) => {
  let { sort, order, page, q } = req.query;
  //convert a page to integer, and set a default of 1 or it is not passed

  let pageInt = parseInt(page);

  if (isNaN(page)) {
    pageInt = 1;
  }

  if (!sort) {
    sort = "name";
  }

  if (!order) {
    order = "asc";
  }

  fetchArticles(sort, order, pageInt, q)
    .then((articles) => {
      res.json(articles);
    })
    .catch((err) => {
      const httpError = new HttpError(err.message, 500);
      next(httpError);
    });
};

const getArticleById = (req, res, next) => {
  const { _id } = req.params;
  fetchArticleById(_id)
    .then((articles) => {
      if (!articles) {
        // 404 -> Not Found
        const httpError = new HttpError("Article with given id does not exist", 404);
        next(httpError);
        return;
      }
      res.json(articles);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        // 400 -> BAD REQUEST
        const httpError = new HttpError("Invalid Article id", 400);
        next(httpError);
      } else {
        // eg. DB connection error
        // 500 -> Internal Server Error
        const httpError = new HttpError(err.message, 500);
        next(httpError);
      }
    });
};

//POST /articles
const postArticle = (req, res, next) => {
  const { body } = req;
  console.log(Object.keys(body));

  // check if the body is an empty object
  if (Object.keys(body).length === 0) {
    const httpError = new HttpError("Request body is empty. Articles are missing.", 400);
    next(httpError);
    return;
  }

  addArticle(body)
    .then((article) => {
      res.status(201).json(article);
    })
    .catch((err) => {
      const httpError = new HttpError(err.message, 400);
      next(httpError);
    });
};

const putArticle = (req, res, next) => {
  const { body } = req;
  const { _id } = req.params;

  // check if the body is an empty object
  if (Object.keys(body).length === 0) {
    const httpError = new HttpError("Request body is empty. Articles are missing.", 400);
    next(httpError);
    return;
  }

  updateArticle(_id, body)
    .then((article) => {
      res.json(article);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        // 400 -> BAD REQUEST
        const httpError = new HttpError("Invalid Article id", 400);
        next(httpError);
      } else {
        // eg. DB connection error
        // 500 -> Internal Server Error
        const httpError = new HttpError(err.message, 500);
        next(httpError);
      }
    });
};

const deleteArticle = (req, res, next) => {
  const { _id } = req.params;

  removeArticle(_id)
    .then(() => {
      res.status(204).json();
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        // 400 -> BAD REQUEST
        const httpError = new HttpError("Invalid Article id", 400);
        next(httpError);
      } else {
        // eg. DB connection error
        // 500 -> Internal Server Error
        const httpError = new HttpError(err.message, 500);
        next(httpError);
      }
    });
};

//POST /:_id/comments
const postComment = (req, res, next) => {
  const { _id } = req.params;

  const { body } = req;
  console.log(Object.keys(body));
  // check if the body is an empty object
  if (Object.keys(body).length === 0) {
    const httpError = new HttpError("Request body is empty. Comments details are missing.", 400);
    next(httpError);
    return;
  }

  addComment(_id, body)
    .then((article) => {
      res.status(201).json(article);
    })
    .catch((err) => {
      const httpError = new HttpError(err.message, 400);
      next(httpError);
    });
};

const getComments = (req, res, next) => {
  const { _id } = req.params;

  fetchComments(_id)
    .then((comments) => {
      res.json(comments);
    })
    .catch((err) => {
      const httpError = new HttpError(err.message, 500);
      next(httpError);
    });
};

export {
  getArticles,
  getArticleById,
  postArticle,
  putArticle,
  deleteArticle,
  postComment,
  getComments,
};