// const UserModel= require("../models/userModel.js")
const BookModel= require("../models/bookModel")

const createBook = async function (req, res) {
    let data= req.body
    // let data = {
    //     "bookName" : req.body.bookName,
    //     "authorName" : req.body.authorName,
    //     "category" : req.body.category,
    //     "year" : req.body.year,
    // }

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})    
}


// const getUsersData = async function (req, res) {
//     let allUsers= await UserModel.find(createUser.bookName)
//     res.send({msg: allUsers})
// }

const bookList = async function (req, res) {
    let allUsers= await BookModel.find().select({bookName : 1, authorName : 1, _id : 0})
    res.send({msg: allUsers})
}

const getXINRBooks = async function (req, res) {
    let allUsers= await BookModel.find( { $or :[ {"prices.indianPrice":"Rs100"},{"prices.indianPrice":"Rs200"},{"prices.indianPrice":"Rs500"} ] } )
    res.send({msg: allUsers})
}

const getRandomBooks = async function (req, res) {
    let allUsers= await BookModel.find(  { $or :[ {stockAvailable : true}, {totalPages : {$gt:500} } ] }  ).select({bookName : 1, _id : 0, year:1, stockAvailable:1, totalPages:1})
    res.send({msg: allUsers})
}

const getBooksInYear = async function (req, res) {
    let allUsers= await BookModel.find( { year: req.body.year } ).select({bookName : 1, _id : 0, year:1})
    res.send({msg: allUsers})
}

const getParticularBooks = async function (req, res) {
    let allUsers= await BookModel.find( req.body )
    res.send({msg: allUsers})
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
// module.exports.getUsersData= getUsersData