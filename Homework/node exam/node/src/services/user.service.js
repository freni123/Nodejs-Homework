const { User } = require("../models");
/* ------------------------------ /create-user ------------------------------ */
const createUser = async (reqBody) => {
  return User.create(reqBody);
};
/* ------------------------------ get user-list ----------------------------- */
const getUserList = async (req, res) => {
  return User.find({ $or: [{ is_active: true }] });
};
/* ------------------------- get user details by id ------------------------- */
const getUserById = async (userId) => {
  return User.findById(userId);
};
/* ---------------------------- delete user list ---------------------------- */
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};
/* ------------------------------- update user ------------------------------ */
const updateUserId = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, {
    $set: updateBody,
  });
};
module.exports = {
  createUser,
  getUserList,
  deleteUser,
  getUserById,
  updateUserId,
};
