const {musicService} = require("../services");
const {options} = require("joi");

// create-music
const createMusic = async (req,res) => {
    try {
        const reqBody = req.body;
        const music = await musicService.createMusic(reqBody);
        if(!music){
            throw new Error("Couldn't create music");
        }
        res.status(200).json({
            success:true,
            message:"Music Created Successfully",
            data:{music},
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
// Get Music List
const getMusicList = async (req,res) => {
    try {
        const getMusicDetails = await musicService.getMusicList(req,res);
        res.status(200).json({
            success:true,
            message:"Music details get successfully!",
            data:getMusicDetails,
        })
    } catch (error) {
        res.status(400);
    }
}
module.exports = {createMusic,getMusicList}