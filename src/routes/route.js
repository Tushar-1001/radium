const express = require('express');
const router = express.Router();

const collegeController=require('../controllers/collegeController');
const internController= require('../controllers/internController');

//these are all the API's which we will be using for each of the problem statement.
router.post('/functionup/colleges', collegeController.registerCollege ) //done
router.post('/functionup/interns',internController.internRegistration ) //done
router.get('/functionup/collegeDetails',collegeController.getDetails); //done


module.exports = router;