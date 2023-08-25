const Joi = require("joi");

/** Create School */
const createSchool = {
  body: Joi.object().keys({
    school_name: Joi.string().required().trim(),
    address: Joi.string().required().trim(),
    principal_name: Joi.string().required().trim(),
    faculty_name: Joi.string().required().trim(),
    student_name: Joi.string().required().trim(),
    faculty_subject: Joi.string().required().trim(),
  }),
};
/** Get Book List */
const getSchoolList = {
  query:Joi.object().keys({
    serach:Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  })
}
module.exports = {createSchool,getSchoolList};