const mongoose=require('mongoose')

const authorSchema = new mongoose.Schema({
    author_id: Number,
    authorName: String,
    age : Number,
    address : String,
    

}, {timestamps: true} )



module.exports=mongoose.model('newAuthor',authorSchema)


// String, Number
// Boolean, Object/json, array