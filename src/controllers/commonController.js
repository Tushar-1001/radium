const axios = require("axios");
const userModel = require("../models/userModel")

// res.status(200). send( { data: userDetails } )

const getStatesList = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
    };
    const cowinStates = await axios(options);

    console.log("WORKING");
    let states = cowinStates.data;
    res.status(200).send({ msg: "Successfully fetched data", data: states });

  }
  catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Some error occured" });
  }

};




const getOtp = async function (req, res) {

  try {

    let options = {
      method: "post", // method has to be post
      url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
      data: { "mobile": req.body.mobile } // we are sending the json body in the data 
    }
    let response = await axios(options)

    let id = response.data
    res.status(200).send({ msg: "Success", data: id })

  }
  catch (err) {
    console.log(err.message)
    res.status(500).send({ msg: "Something went wrong" })
  }
}

// -----------------------Nov.26 Assignment-------------------------------------------------------------
// ------------------------------------------------------------------------------------

const fetchCoins = async function (req, res) {
  try {
   
    var options = {
      method: "get",
      url: "https://api.coincap.io/v2/assets",
      headers: {
        Authorization: "Bearer a3ee4a5a-eb65-4aa9-90f0-612dfc24a8e3",
      },
    };

    let response = await axios(options);

    let coins = response.data.data;

   
    for (i = 0; i < coins.length; i++) {
      let coin = {
        symbol: coins[i].symbol,
        name: coins[i].name,
        marketCapUsd: coins[i].marketCapUsd,
        priceUsd: coins[i].priceUsd
      };

      await userModel.findOneAndUpdate({ symbol: coins[i].symbol }, coin, { upsert: true, new: true } );
    }

     coins.sort( function (a, b) { return b.changePercent24Hr - a.changePercent24Hr; });

    res.status(200).send({ status: true, data: coins });

  } catch (error) {
    console.log(error);
    res.status(500).send({ status: false, msg: "server error" });
  }
}








// const cryptoData = async function (req, res) {
//   const data = req.body


//   let savedData = await userModel.create(data)
//   res.send({ Data: savedData })
// }









module.exports.getOtp = getOtp;
module.exports.getStatesList = getStatesList;
module.exports.fetchCoins = fetchCoins;
// module.exports.getCrypto = getCrypto;
// module.exports.cryptoData = cryptoData;
