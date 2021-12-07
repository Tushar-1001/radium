const mongoose = require('mongoose');
const validator = require("email-validator");


const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required:'Name of college is required',
        trim: true
    },
    fullName: {
        type: String,
        required: 'fullName of college is required',
        trim: true
    },
    logoLink: {
        type: String,
        required: 'Link of College is required',
        trim:true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
}, { timestamps: true })
module.exports = mongoose.model('Colleges', collegeSchema);
