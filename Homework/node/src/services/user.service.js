const { options } = require("joi");
const { User } = require("../models");

//  create user
 const createUser = async (reqBody) => {
    return User.create(reqBody);
  };
  // Get user list
 const getUserList = async(req, res ) => {
    return User.find();
  }
//  Delete user
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};
//get user by id
const getUserById = async (userId) => {
  return User.findById(userId);
};

// Get user update
const updateDetails = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};
  module.exports = {
    createUser,
    getUserList,
    deleteUser,
    updateDetails,
    getUserById
  };