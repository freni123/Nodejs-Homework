const {options} = require("joi");
const {user} = require("../models");

//create-user
const createUser = async (reqBody) => {
    return user.create(reqBody);
};
//get user-list
const getUserList = async (req,res) => {
    return user.find({$or:[{is_active:true}]});
}
// delete user list
const deleteUser = async(userId) => {
    return user.findByIdAndDelete(userId);
}
module.exports = {createUser,getUserList,deleteUser}