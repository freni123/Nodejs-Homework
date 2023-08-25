const {grocery} = require("../models");

// create-grocery
const createGrocery = async(reqBody) => {
    return grocery.create(reqBody);
};
// get grocery list
const getGroceryList = async(req,res) => {
    return grocery.find({$or:[{price:12000}]});
};
// get grocery details by id
const groceryById = async (groceryId) => {
    return grocery.findById(groceryId);
};
// Delete grocery
const deleteGrocery = async (groceryId) => {
    return grocery.findByIdAndDelete(groceryId);
};
module.exports = {
    createGrocery,
    getGroceryList,
    groceryById,
    deleteGrocery
}