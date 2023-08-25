const {jewellery} = require("../models");

// Create-jewellery
const createJewellery = async (reqBody) => {
    return jewellery.create(reqBody);
};
// Get jewellery List
const getJewelleryList = async (req , res) => {
    return jewellery.find();
};
module.exports = {
    createJewellery,
    getJewelleryList
}
