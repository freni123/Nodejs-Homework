const { options } = require("joi");
const { User } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
 const createUser = async (reqBody) => {
    return User.create(reqBody);
  };
  /**
 * Get user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
 const getUserList = async(req, res ) => {
    return User.find({$or:[{is_active:false}]});
  }
  /**
 * Delete user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};
  module.exports = {
    createUser,
    getUserList,
    deleteUser
  };