const express = require('express');
const router = express.Router();

const authorModel= require("../models/authorModel")

const bookModel= require("../models/bookModel")

const authorController= require("../controllers/authorController")

// const bookController= require("../controllers/bookController")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});



// -------Nov.16,2021----Assignment-------------------------------------------

router.post('/createBook',  authorController.createBook );
router.post('/createAuthor',  authorController.createAuthor );
router.get('/findAuthor',  authorController.findAuthor );
router.get('/getAndUpdate',  authorController.getAndUpdate  );
router.get('/specificCost',  authorController.specificCost  );
// router.get('/findAuthor',  bookController.findAuthor );

module.exports = router;