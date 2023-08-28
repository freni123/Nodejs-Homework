const {grocery} = require("../models");

// create-grocery
const createGrocery = async(reqBody) => {
    return grocery.create(reqBody);
};
// get grocery list
const getGroceryList = async(req,res) => {
    return grocery.find();
};
// get grocery details by id
const getGroceryById = async (groceryId) => {
    return grocery.findById(groceryId);
};
// Delete grocery
const deleteGrocery = async (groceryId) => {
    return grocery.findByIdAndDelete(groceryId);
};
// Update Grocery
const updateGrocery = async(groceryId,updateBody) => {
    return grocery.findByIdAndUpdate(groceryId,{$set:updateBody});
}
module.exports = {
    createGrocery,
    getGroceryList,
    getGroceryById,
    deleteGrocery,
    updateGrocery
}