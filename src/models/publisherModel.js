const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId


const publisherSchema = new mongoose.Schema({
    name: String ,
    headQuarter : String
    

}, {timestamps: true} )


module.exports=mongoose.model('publisher', publisherSchema)

