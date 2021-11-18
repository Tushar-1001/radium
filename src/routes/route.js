const express = require('express');
const router = express.Router();

const authorModel= require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const authorController= require("../controllers/authorController")

// const bookController= require("../controllers/bookController")

router.get('/test-me', function (req, res) {
    res.send('Ref-Populate Assignment!')
});



// -------Nov.18,2021----Assignment-------------------------------------------

router.post('/createBook',  authorController.createBook );
router.post('/createAuthor',  authorController.createAuthor );
router.get('/getBooks',  authorController.getBooks );
router.post('/createPublisher',  authorController.createPublisher );


module.exports = router;