const mongoose=require('mongoose')

const bookModel = new mongoose.Schema({
    bookName: String,
    authorName: String,
    tags : [String],
    year : {type: Number, default:2021},
    totalPages : Number,
    stockAvailable : Boolean,
    prices: {
        indianPrice: String,
        europeanPrice: String,
    },
    

}, {timestamps: true} )

module.exports=mongoose.model('Book_Collection',bookModel)

// String, Number
// Boolean, Object/json, array