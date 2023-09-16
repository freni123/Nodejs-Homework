const express = require('express');
const {galleryController} = require('../../controllers');
const {upload}=require('../../middlewares/upload');


const router = express.Router();

//create-gallery
router.post(
    '/create-gallery',
    // auth(),
    upload.single('product_image'),
    galleryController.createGallery
);
// get gallery list
// router.get(
//     '/gallery-list',
//     galleryController.getGalleryList
// );
// // delete gallery
// router.delete(
//     '/delete-gallery/:galleryId',
//     galleryController.deleteGallery
// );
// // update gallery
// router.put(
//     '/update-gallery/:galleryId',
//     galleryController.updateDetails
// );
module.exports = router;