const Joi = require("joi");

/** Create Book*/
const createPharmacy = {
  body: Joi.object().keys({
    Medication_name: Joi.string().required().trim(),
    dosage: Joi.string().required().trim(),
    manufacturer: Joi.string().required().trim(),
    medicines_price: Joi.string().required().trim(),
    patientName: Joi.string().required().trim(),
    quantity: Joi.string().required().trim(),
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