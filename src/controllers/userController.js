
const userModel = require("../models/userModel.js");

// var jwt = require('json-web-token');
const jwt = require("jsonwebtoken");

//<--Nov.24 assignment/jwt-----Json web token---------------------------------------------------------

// --------------------------------------------------------------------
const createUser = async function (req, res) {
  let data = req.body
  let savedData = await userModel.create(data)
  res.send({ Data: savedData })
};

//-----------------------------------------------------------------------
const login = async function (req, res) {
  let userName = req.body.userName
  let password = req.body.password

  let credentials = await userModel.findOne({ userName: userName, password: password, isDeleted: false })

  if (credentials) {
    let payload = { _id: credentials._id }
    let token = jwt.sign(payload, "radium")
    res.send({ status: true, data: credentials._id, token: token })
  } else {
    res.send({ msg: "User name not found" })
  }
};

//---------------------------------------------------------------------------
const users = async function (req, res) {
try 
  {
      if (req.validToken._id === req.params.userId) {
        let userId = req.params.userId
        let userDetails = await userModel.findOne({ _id: userId, isDeleted: false })
        if (userDetails) {
          res.status(200).send({ status: true, msg: userDetails })
        } else {
          res.status(404).send({ status: false, msg: "Invalid UsedId" })
        }
      } else { res.status(404).send({ status: false, msg: "Not Authorized" }) }
      console.log(req.token.userId)
    }
    
  catch(error){
    res.status(500).send({status : false, msg : "This is catch"})
    
  }
};

  //------------------------------------------------------------------------------
  const updateUser = async function (req, res) {
    try
    {
      let userId = req.params.userId
    let email = req.body.email
    if (req.validToken._id == userId) {
    let userDetails = await userModel.findOneAndUpdate({ _id: userId }, { email: email }, { new: true })
    if (userDetails) {
      res.send({ status: true, msg: userDetails })
    } else {
      res.send({ status: false, msg: "Invalid UsedId" })
    }
  } else {res.status(404).send({status:false, msg:'User not found'})}
}
catch(error){res.status(500).send({status:false, msg: "Invalid token Id or user Id"}) }
  }

  //-------------------------------------------------------------------------------------------



  const getUser = async function (req, res) {
    let allUser = await userModel.find();
    res.send({ msg: allUser });
  };
  module.exports.createUser = createUser;
  module.exports.login = login;
  module.exports.users = users;
  module.exports.updateUser = updateUser;

  module.exports.getUser = getUser;
