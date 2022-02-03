import mongoose from "mongoose";

const Article = mongoose.model("Article");
const getArticleByCredentials = (credentials) => {
  return Article.findOne(credentials);
};



export { getArticleByCredentials };