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
};
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
};
//Delete Music
const deleteMusic = async (req,res) => {
    try {
        const musicId = req.params.musicId;
        await musicService.deleteMusic(musicId);
        res.status(200).json({
            success:true,
            message:"Music Record Delete Successfully!",
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};
//Update Music
const updateMusic = async (req,res) => {
    try {
        const musicId = req.params.musicId;
        const musicExists = await musicService.getMusicById(musicId);
        if(!musicExists){
            throw new Error("Music not found!");
        }
        await musicService.updateMusic(musicId,req.body);
        res.status(200).json({success:true,message:"Music record update successfully!"});
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

module.exports = {
    createMusic,
    getMusicList,
    deleteMusic,
    updateMusic
}