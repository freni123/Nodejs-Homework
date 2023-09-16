const {gallery} = require("../models");

// create-gallery
const createGallery = async (reqBody) => {
    return gallery.create(reqBody);
};
//get gallery-list
const getGalleryList = async (req, res) => {
    return gallery.find().populate("product");
};
// get gallery details by id
const getGalleryById = async (galleryId) => {
    return gallery.findById(galleryId);
};
// delete user list
const deleteGallery = async (galleryId) => {
    return gallery.findByIdAndDelete(galleryId);
};
// update user
const updateGalleryId = async (galleryId, updateBody) => {
    return gallery.findByIdAndUpdate(galleryId, {
        $set: updateBody
    });
};
module.exports = {
    createGallery,
    getGalleryList,
    getGalleryById,
    deleteGallery,
    updateGalleryId
}