const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId


const bookSchema = new mongoose.Schema({
    name: String ,
    author: {type:ObjectID, ref : 'myAuthor'},
    price: String,
    ratings : Number,
    publisher : {type:ObjectID, ref : 'publisher'}
    

}, {timestamps: true} )


module.exports=mongoose.model('myBook',bookSchema)

