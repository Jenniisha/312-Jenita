import mongoose from "mongoose";
import "../models/Article.js";

const connectionStr = `mongodb://0.0.0.0:27017/Blog`;
mongoose.connect(connectionStr)
      .then(() => {
      console.log(`connected to the DB.`);
      })
     .catch((err) => {
      console.log(err.message);
     });