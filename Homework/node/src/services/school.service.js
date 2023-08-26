const { school } = require("../models");

// create-school
const createSchool = async (reqBody) => {
    return school.create(reqBody);
};
// Get School-List
const getSchoolList = async(req,res) => {
    return school.find({$or:[{is_active:true}]});
};
// get Schooldetails by id
const schoolById = async (schoolId) => {
  return school.findById(schoolId);
};
// Delete School
const deleteSchool = async (schoolId) => {
  return school.findByIdAndDelete(schoolId);
};

  module.exports = {
    createSchool,
    getSchoolList,
    schoolById,
    deleteSchool
  }
