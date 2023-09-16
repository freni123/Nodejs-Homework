const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
        token: {
            type: String,
        },
        // expire_time: {
        //     type: Date,
        //     default: null,
        // },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "users",
        },
    }, {
        timestamps: true,
    }
);
const token = mongoose.model('token',tokenSchema);
module.exports = token;