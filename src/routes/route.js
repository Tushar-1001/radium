const express = require('express');
const router = express.Router();

const productController= require("../controllers/productController")
const orderController= require("../controllers/orderController")
const userController= require("../controllers/userController")
const middleware= require("../middleware/middleware")

// -------Nov.22,2021----Middlewares Assignment 2-------------------------------------------

router.get('/test-me2', function (req, res) {
    res.send('Middlewares Assignment 2!')
    
});




router.post('/createUser', middleware.mid, userController.createUser );
router.post('/createProduct',  productController.createProduct );
router.post('/createOrder',middleware.mid,  orderController.createOrder );





module.exports = router;




