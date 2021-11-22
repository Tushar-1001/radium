const userModel = require("../models/userModel.js")
const productModel= require("../models/productModel")
const orderModel= require("../models/orderModel")






const createProduct = async function (req, res) {
    const data = req.body
    let savedData = await productModel.create(data)
    res.send({ Data: savedData })
}



module.exports.createProduct = createProduct




// const getBooks = async function (req, res) {
//     let books = await bookModel.find().populate({path:'author' , select :{'author_name':1,'age':1}} )

//     res.send({ Data: books })
// }

// const createPublisher = async function (req, res) {
//     const data = req.body;
//     let savedData = await publisherModel.create(data)
//     res.send({ Data: savedData })


// }



// const findAuthor= async function (req, res) {
//     const data= req.body


//     let savedData= await authorModel.create(data)
//     res.send({msg: savedData})    
// }
