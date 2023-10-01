const { Posts } = require("../models");

// create Posts
const createPost = async (reqBody) => {
  return Posts.create(reqBody);
};

// get Posts list
const getPostList = async (req, res) => {
  return Posts.find().populate("user").populate("author");
};
// get Posts by id
const getPostById = async (postId) => {
  return Posts.findById(postId);
};
// update Posts list
const updateRecord = async (postId, updateBody) => {
  return Posts.findByIdAndUpdate(postId, { $set: updateBody });
};

// delete Posts lisr
const deleteRecord = async (postId) => {
  return Posts.findByIdAndDelete(postId);
};

module.exports = {
  createPost,
  getPostById,
  getPostList,
  updateRecord,
  deleteRecord,
};
