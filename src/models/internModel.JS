const mongoose = require('mongoose');
const ObjectId =mongoose.Types.ObjectId;

const internSchema = new mongoose.Schema({
    
        name: {
            type: String,
            required: 'Name of intern is required',
            trim:true
        },
        email: {
            type: String,
            unique: true,
            trim:true
        },
        mobile: {
            type: String,
            unique: true,
            required:'Mobile Number is Mandatory'
        },
        collegeId: {
            type: ObjectId,
            refs: 'CollegeData'
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    
},{timestamps:true})

module.exports=mongoose.model('Interns',internSchema)
