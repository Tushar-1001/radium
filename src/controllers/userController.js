// const UserModel= require("../models/userModel.js")


// const createUser= async function (req, res) {
//     // var data= req.body
//     let data = {
//         "bookName" : req.body.bookName,
//         "authorName" : req.body.authorName,
//         "category" : req.body.category,
//         "year" : req.body.year,
//     }

//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})    
// }


// // const getUsersData= async function (req, res) {
// //     let allUsers= await UserModel.find(createUser.bookName)
// //     res.send({msg: allUsers})
// // }

// // module.exports.createUser= createUser
// // module.exports.getUsersData= getUsersData