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
module.exports = {createSchool};