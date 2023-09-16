const Joi = require("joi");

//  create-gallery
const createGallery = {
  body: Joi.object().keys({
    image_name: Joi.string().required().trim(),
    gallery_image: Joi.string().required().trim(),
  }),
};
module.exports = {
  createGallery,
};
