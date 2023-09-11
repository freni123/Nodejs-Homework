const {subChildCategory} = require("../models");

// create subchild-category
const createSubChildCate = async (reqBody) => {
    return subChildCategory.create(reqBody);
};
// get subchild-category list
const getSubChildCatelist = async (req, res) => {
    return subChildCategory.find().populate("category").populate("subCategory");
};
// get subchild-category details by id
const getSubChildCateById = async (subchildcateId) => {
    return subChildCategory.findById(subchildcateId);
};
// delete subchild-category
const deleteSubChildcate = async (subchildcateId) => {
    return subChildCategory.findByIdAndDelete(subchildcateId);
};
// update subchild-category details
const updateSubChildCate = async (subchildcateId, updateBody) => {
    return subChildCategory.findByIdAndUpdate(subchildcateId, {
        $set: updateBody
    });
};
module.exports = {
    createSubChildCate,
    getSubChildCatelist,
    getSubChildCateById,
    deleteSubChildcate,
    updateSubChildCate
};