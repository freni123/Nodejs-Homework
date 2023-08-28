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
const getSchoolById = async (schoolId) => {
  return school.findById(schoolId);
};
// Delete School
const deleteSchool = async (schoolId) => {
  return school.findByIdAndDelete(schoolId);
};
// Update School
const updateSchool = async(schoolId,updateBody) => {
  return school.findByIdAndUpdate(schoolId,{$set:updateBody});
};

  module.exports = {
    createSchool,
    getSchoolList,
    getSchoolById,
    deleteSchool,
    updateSchool
  }
