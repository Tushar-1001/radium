const collegeModel = require('../models/collegeModel');
const internModel = require('../models/internModel');
const validateBody = require('../validation/validation');

////.........Register a new college in our data base............
const registerCollege = async function (req, res) {
    try {
        const { name, fullName, logoLink, isDeleted } = req.body;//We are using destructuring property of Javascript
        const requestBody = req.body;

        //---------We are using the split function to check that the college name is in single word or not----------//
        const collegeval = name.split(" ");
        const len = collegeval.length
        if (len > 1) {
            return res.status(400).send({ status: false, msg: "Abbreviated college name should be in a single word" });
        }
        //Validate body
        if (!validateBody.isValidRequestBody(req.body)) {
            return res.status(400).send({ status: false, msg: "Please provide college body" });
        }

        //Validate name
        if (!validateBody.isValid(name)) {
            return res.status(400).send({ status: false, msg: "Please provide college name or college field" });
        }

        //Validate the link
        if (!validateBody.isValid(logoLink)) {
            return res.status(400).send({ status: false, msg: "Please provide logo link " });
        }

        // Validate fullname of college
        if (!validateBody.isValid(fullName)) {
            return res.status(400).send({ status: false, msg: "Please provide Full college Name or fullName field " });
        }
        let isDBexists = await collegeModel.find();
        let DBlen = isDBexists.length

        // Cheking duplicate Entry Of College 
        if (DBlen != 0) {
            const duplicateCollegeName = await collegeModel.findOne({ fullName: fullName });
            if (duplicateCollegeName) {
                return res.status(400).send({ msg: "This college name is allready exists" });
            }
            const duplicateLogolink = await collegeModel.findOne({ logoLink: logoLink })
            if (duplicateLogolink) {
                res.status(400).send({ status: false, msg: 'This logo link belongs to other college.' })
            }
        }
        if (isDeleted === true) {
            return res.status(400).send({ status: false, msg: "At the time of new entry,You have to assigned false in isDeleted key" });
        }
        const collegeData = await collegeModel.create(requestBody);
        res.status(201).send({ status: true, message: `College Registered Succesfully`, data: collegeData });
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message });
    }
}

//....Getting the data from Our data base
const getDetails = async function (req, res) {
    try {
        const value = req.query.collegeName;
        if (!value) {
            return res.status(400).send({ status: false, msg: "Please provide a valid key-value pair for college Name." });
        }
        const collegeDetails = await collegeModel.findOne({ name: value });
        if (!collegeDetails) {
            return res.status(400).send({ status: false, msg: "This college name does not exists in our Database." });
        }
        const id = collegeDetails._id;
        const { name, fullName, logoLink } = collegeDetails
        const internDetails = await internModel.find({ collegeId: id }).select({ _id: 1, name: 1, mobile: 1, email: 1 });
        if (!internDetails) {
            return res.status(400).send({ status: true, data: details, msg: "No student applied in this college for internship." });
        }
        let details = { name, fullName, logoLink, internDetails }
        return res.status(201).send({ status: true, collegData: details });
    } catch (err) {
        res.status(500).send({ status: false, message: err.message });
    }
}


module.exports = {
    getDetails,
    registerCollege
}
