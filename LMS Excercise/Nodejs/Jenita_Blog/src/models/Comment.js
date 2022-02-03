import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  commenter: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },

  title: {
    type: String,
  },

  comment: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export default commentSchema;