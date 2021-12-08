const collegeModel = require('../models/collegeModel');
const internModel = require('../models/internModel');
const validateBody = require('../validation/validation');

const internRegistration = async function (req, res) {
    try {
        const { name, email, mobile, collegeName, isDeleted } = req.body; //Destructring
        const requestBody = req.body;
        // Its checking the provided body is empty or not
        if (!validateBody.isValidRequestBody(requestBody)) {
            return res.status(400).send({ status: false, msg: "Please provide body of intern" });
        }
        if (!validateBody.isValid(name)) {
            return res.status(400).send({ status: false, msg: "Please provide name or name field" });
        }
        if (!validateBody.isValid(collegeName)) {
            return res.status(400).send({ status: false, msg: "Please provide college name or college field" });
        }
        if (!validateBody.isValid(mobile)) {
            return res.status(400).send({ status: false, msg: "Please provide mobile number or mobile field" });
        }
        if (!validateBody.isValid(email)) {
            return res.status(400).send({ status: false, msg: "Please provide Email id or email field" });;
        }
        if (!validateBody.isValidSyntaxOfEmail(email)) {
            return res.status(404).send({ status: false, msg: "Please provide a valid Email Id" });
        }
        if (!validateBody.isValidMobileNum(mobile)) {
            return res.status(400).send({ status: false, msg: 'Please provide a valid Mobile number.' })
        }
        let isDBexists = await internModel.find();
        let dbLen = isDBexists.length
        if (dbLen != 0) {
            //Cheking the provided email id is all ready exists or not our database
            const DuplicateEmailId = await internModel.find({ email: email });
            const emailFound = DuplicateEmailId.length;
            if (emailFound != 0) {
                return res.status(400).send({ status: false, msg: "This Email Id allready exists in our Database " });
            }
            const duplicateMob = await internModel.findOne({ mobile: mobile })
            // const duplicateMobCount = duplicateMob.length
            if (duplicateMob) {
                return res.status(400).send({ status: false, msg: "This mobile number allready exists in our Database" });
            }
        }
        // Cheking the email id is duplicate or not       
        if (isDeleted === true) {
            return res.status(400).send({ status: false, msg: "At the time of new entry,you have to assign false in isDeleted key" });
        }
        let collegeData = await collegeModel.findOne({ name: collegeName })
        if (!collegeData) {
            res.status(400).send({ status: false, msg: "This college name does not exists." })
        }
        let collegeId = collegeData._id
        let data = { name, email, mobile, collegeId, isDeleted }
        const internData = await internModel.create(data);

        res.status(201).send({ status: true, message: 'Intern Registration successful', data: internData });
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message });
    }
}
module.exports.internRegistration = internRegistration;
