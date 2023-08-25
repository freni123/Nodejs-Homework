const {grocery} = require("../models");

// create-grocery
const createGrocery = async(reqBody) => {
    return grocery.create(reqBody);
};

// get grocery list
const getGroceryList = async(req,res) => {
    return grocery.find();
};
module.exports = {
    createGrocery,
    getGroceryList
}