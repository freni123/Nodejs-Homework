const {music} = require("../models");

// create-music
const createMusic = async (reqBody) => {
    return music.create(reqBody);
};
// get music list
const getMusicList = async(req,res) => {
    return music.find({$or:[{is_active:true}]});
};
// get Music details by id
const getMusicById = async (musicId) => {
    return music.findById(musicId);
};
// Delete music
  const deleteMusic = async (musicId) => {
    return music.findByIdAndDelete(musicId);
};
// Update Music
const updateMusic = async(musicId,updateBody) => {
    return music.findByIdAndUpdate(musicId,{$set:updateBody});
};
module.exports = {
    createMusic,
    getMusicList,
    getMusicById,
    deleteMusic,
    updateMusic
}