const mongoose=require('mongoose')


const bookSchema = new mongoose.Schema({
    name: String ,
    author_id: Number,
    price: String,
    ratings : String
    

}, {timestamps: true} )


module.exports=mongoose.model('newBook',bookSchema)

// String, Number
// Boolean, Object/json, array