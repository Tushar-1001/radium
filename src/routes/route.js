const express = require('express');
const router = express.Router();

const commonController= require("../controllers/commonController")

router.get("/cowin/states", commonController.getStatesList)
router.get("/cowin/districts/:stateId", commonController.getDistrictsList)
router.get("/cowin/centers", commonController.getByPin)
router.post("/cowin/getOtp", commonController.getOtp)
// router.post("/cowin/confirmOtp", commonController.confirmOtp)

// ------------------------------------------------------------
router.get("/londonWeather", commonController.londonWeather)
router.get("/weather", commonController.getWeather)







module.exports = router;