const express = require("express");
const { galleryController } = require("../../controllers");
const { upload } = require("../../middlewares/upload");
// const auth = require('../../middlewares/auth');

const router = express.Router();

//create-gallery
router.post(
  "/create-gallery",
  // auth(),
  upload.single("gallery_image"),
  galleryController.createGallery
);
// get gallery list
router.get("/gallery-list", galleryController.getGalleryList);
// delete gallery
router.delete("/delete-gallery/:galleryId", galleryController.deleteGallery);
// update gallery
router.put("/update-gallery/:galleryId", galleryController.updateGallery);
module.exports = router;
