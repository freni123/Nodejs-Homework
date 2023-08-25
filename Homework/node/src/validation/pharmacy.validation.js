const Joi = require("joi");

/** Create Pharmacy*/
const createPharmacy = {
  body: Joi.object().keys({
    Medication_name: Joi.string().required().trim(),
    dosage: Joi.number().integer().required(),
    manufacturer: Joi.string().required().trim(),
    medicines_price: Joi.number().integer().required(),
    patientName: Joi.string().required().trim(),
    quantity: Joi.number().integer().required(),
    }),
};
/** Get Pharmacy List */
const getPharmacyList = {
  query:Joi.object().keys({
    serach:Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  })
}
module.exports = {createPharmacy,getPharmacyList};