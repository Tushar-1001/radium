const userModel = require("../models/userModel.js")
const productModel= require("../models/productModel")
const orderModel= require("../models/orderModel")


const createUser = async function (req, res) {
    const data = req.body
    let savedData = await userModel.create(data)
    res.send({ Data: savedData })
}


module.exports.createUser = createUser