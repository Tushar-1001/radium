const authorModel = require("../models/authorModel.js")
const bookModel = require("../models/bookModel.js")



const createAuthor = async function (req, res) {
    const data = req.body

    if (data.author_id) {
    let savedData = await authorModel.create(data)
    res.send({ msg: savedData })
    }
    res.send("Author ID required")

}


const createBook = async function (req, res) {
    const data = req.body

    if (data.author_id) {
        let savedData = await bookModel.create(data)
        res.send({ msg: savedData })
    }
    res.send("Author ID required")
}


const findAuthor = async function (req, res) {
    let allBooks = await authorModel.find({ author_name: "Chetan Bhagat" }).select({ author_id: 1 })
    let Id = allBooks[0].author_id
    let cbBooks = await bookModel.find({ author_id: Id }).select({ name: 1 })
    res.send({ msg: cbBooks })
}

const getAndUpdate = async function (req, res) {
    let books = await bookModel.find({ name: "Two states" })
    let Id = books[0].author_id
    let AuthorName = await authorModel.find({ author_id: Id }).select({ author_name: 1 })
    let updated = await bookModel.findOneAndUpdate({ name: "Two states", price: 100 }, { new: true }).select({ name: 1, price: 1 })
    res.send({ msg: updated, AuthorName })
}

const specificCost = async function (req, res) {
    // let booksWithPrice = await BookModel.find({price:{$gte: 50, $lte: 100}}).select({author_id: 1})

    // let id = booksWithPrice[0].author_id
    // console.log(id)

    // let authors = await AuthorModel.find({author_id : id}).select({author_name : 1})

    let booksWithPrice = await bookModel.find()

    let arr = [];

    for (let i = 0; i < booksWithPrice.length; i++) {
        if (50 <= booksWithPrice[i].price <= 100) {
            arr.push(booksWithPrice[i].author_id)
        }
    }

    let uniqueChars = [...new Set(arr)];
    // console.log(uniqueChars)
    let temp = []
    for (let j = 0; j < uniqueChars.length; j++) {
        let idx = uniqueChars[j]
        let authorName = await authorModel.find({ author_id: idx }).select({ authorName: 1 })

        temp.push(authorName)

    }

    let authors = temp.flat()

    res.send({ msg: authors })

}




module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.findAuthor = findAuthor
module.exports.getAndUpdate = getAndUpdate
module.exports.specificCost = specificCost




// const findAuthor= async function (req, res) {
//     const data= req.body


//     let savedData= await authorModel.create(data)
//     res.send({msg: savedData})    
// }
