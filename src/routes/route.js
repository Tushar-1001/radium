const express = require('express');
const router = express.Router();

// const authorModel= require("../models/authorModel")
// const publisherModel= require("../models/publisherModel")


const authorController= require("../controllers/midController")

// const bookController= require("../controllers/bookController")



router.get('/test-me', function (req, res, next) {
    res.send('Middlewares Assignment!')
    next()
});



// -------Nov.19,2021----Middlewares - Assignment-------------------------------------------

router.post('/createAuthor',  authorController.createAuthor );



// router.post('/createBook',  authorController.createBook );
// router.get('/getBooks',  authorController.getBooks );
// router.post('/createPublisher',  authorController.createPublisher );


module.exports = router;