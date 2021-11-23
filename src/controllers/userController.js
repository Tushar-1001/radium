   
const userModel = require("../models/userModel.js");

// var jwt = require('json-web-token');
const jwt = require("jsonwebtoken");

//<--Nov.23 assignment/jwt-----Json web token---------------------------------------------------------

// --------------------------------------------------------------------
const createUser = async function (req, res) {
  let data= req.body
  let savedData= await userModel.create(data)
  res.send({Data: savedData}) 
};

//-----------------------------------------------------------------------
const login = async function (req, res) {
  let userName= req.body.userName
  let password= req.body.password

  let credentials=await userModel.findOne({userName:userName,password:password,isDeleted:false})

  if(credentials){
          let payload={_id:credentials._id}
          let token=jwt.sign(payload,"radium")
          res.send({status:true,data:credentials._id,token:token})
  }else{
    res.send({msg:"User name not found"})
  }
};

//---------------------------------------------------------------------------
const users = async function (req, res) {
  let userId= req.params.userId
  let userDetails= await userModel.findOne({_id:userId,isDeleted:false})
  if(userDetails){
    res.send({status:true,msg: userDetails}) 
  }else{
    res.send({status:false,msg:"Invalid UsedId"})
  } 
};

//------------------------------------------------------------------------------
const updateUser = async function (req, res) {
  let userId= req.params.userId
  let email=req.body.email
  let userDetails= await userModel.findOneAndUpdate({_id:userId},{email:email},{new:true})
  if(userDetails){
    res.send({status:true,msg: userDetails}) 
  }else{
    res.send({status:false,msg:"Invalid UsedId"})
  } 
};

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
