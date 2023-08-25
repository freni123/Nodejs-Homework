const {schoolService} = require("../services");
const { options } = require("joi");
// create-book
const createSchool = async(req,res) =>{
    try {
        const reqBody = req.body;
        const school = await schoolService.createSchool(reqBody);
        if(!school){
            throw new Error("Something went wrong, please try again or later!");
        }
        res.status(200).json({
        success: true,
        message:"School Details Successfully",
        data: {school},
      });
    } catch (error) {
              res.status(400).json({ success: false, message: error.message });

    }
}
// Get Book List
const getSchoolList = async (req,res) => {
    try {
        const getSchoolDetails = await schoolService.getSchoolList(req,res);
        res.status(200).json({
            success:true,
            message:"School details get successfully!",
            data:getSchoolDetails,
        })
    } catch (error) {
        res.status(400);
    }

}
module.exports = {
        createSchool,
        getSchoolList
}
