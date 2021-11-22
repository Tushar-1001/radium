const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://monty-python:SnYUEY4giV9rekw@functionup-backend-coho.0zpfv.mongodb.net/Tushar_Saini?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});



// Nov.22----Assignment--------
// Write a middleware that logs (console.log) some data everytime any API is hit.


// const dateTime = require('node-datetime');

// const globalMid = function (req , res , next ) {
    
//     const DT = dateTime.create();
//     const formatted = DT.format('d/m/Y H:M:S');
//     let ip = req.ip
//     let url = req.url
//     console.log(`${formatted} ${ip} ${url}`); 
    
//     next()
// }


// app.use(globalMid);