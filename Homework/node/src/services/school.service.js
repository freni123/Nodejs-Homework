const { school } = require("../models");

/** create-school */
const createSchool = async (reqBody) => {
    return school.create(reqBody);
  };
/** Get Book-List*/
const getSchoolList = async(req,res) => {
    return school.find();
  }
  module.exports = {
    createSchool,
    getSchoolList,
  }
