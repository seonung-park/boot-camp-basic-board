const mongoose = require('mongoose');

const { Schema } = mongoose;
const postSchema = new Schema({
  postID: {
    type: String,
    required: true,
    unique: true,
  },
  postTitle: {
    type: String,
    required: true,
    unique: false,
  },
  postContent: {
    type: String,
    required: true,
  },
  postWriter: {
    type: String,
    required: true,
    unique: false,
  },
  postDate: {
    type: String,
    required: true,
  },
  postPassword: {
    type: String,
    required: true,
  },
});




module.exports = mongoose.model('Post_0926', postSchema); //('몽고db이름', postSchema)