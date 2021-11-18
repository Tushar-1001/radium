const authorModel = require("../models/authorModel.js")
const bookModel = require("../models/bookModel.js")
const publisherModel = require("../models/publisherModel")



const createAuthor = async function (req, res) {
    const data = req.body


    let savedData = await authorModel.create(data)
    res.send({ Data: savedData })
}


const createBook = async function (req, res) {
    const data = req.body;
    const authorID = req.body.author;
    const requestedAuthorID = await authorModel.findById(authorID)
    if (requestedAuthorID) {
        let savedData = await bookModel.create(data)
        res.send({ Data: savedData })
    } else if (!authorID) { res.send(`Author ID must be present`) }

    res.send(`Enter valid author ID`)
}

const getBooks = async function (req, res) {
    let books = await bookModel.find().populate({path:'author' , select :{'author_name':1,'age':1}} )

    res.send({ Data: books })
}

const createPublisher = async function (req, res) {
    const data = req.body;
    let savedData = await publisherModel.create(data)
    res.send({ Data: savedData })


}





module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.getBooks = getBooks
module.exports.createPublisher = createPublisher

// module.exports.findAuthor= findAuthor
// module.exports.getAndUpdate = getAndUpdate
// module.exports.specificCost = specificCost




// const findAuthor= async function (req, res) {
//     const data= req.body


//     let savedData= await authorModel.create(data)
//     res.send({msg: savedData})    
// }
