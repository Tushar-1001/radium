const express = require('express');
const router = express.Router();

const commonController= require("../controllers/commonController")

router.get("/cowin/states", commonController.getStatesList)
router.post("/cowin/getOtp", commonController.getOtp)


// router.get("/getCrypto", commonController.getCrypto)
router.get("/fetchCoins", commonController.fetchCoins)






module.exports = router;