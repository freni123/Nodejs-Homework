const {jewellery} = require("../models");

// Create-jewellery
const createJewellery = async (reqBody) => {
    return jewellery.create(reqBody);
};
// Get jewellery List
const getJewelleryList = async (req , res) => {
    return jewellery.find({$or:[{is_active:true}]});
};
// get jewellery details by id
const jewelleryById = async (jewelleryId) => {
    return jewellery.findById(jewelleryId);
};
// Delete jewellery
const deleteJewellery = async (jewelleryId) => {
    return jewellery.findByIdAndDelete(jewelleryId);
};
module.exports = {
    createJewellery,
    getJewelleryList,
    jewelleryById,
    deleteJewellery
}
