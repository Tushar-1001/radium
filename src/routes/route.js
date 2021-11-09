const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/movies', function (req, res) {
    res.send(["Joker","Spiderman","Superman","Batman"])
});


router.get('/movies/:index', function (req, res) {
    let value = req.params.index;
    console.log("The passIndex is " + value)
    let arr = ["Joker","Spiderman","Superman","Batman"];
    let arrLen = arr.length
    if(value <= arrLen - 1 ){
        res.send(arr[value]);
    } else {
        res.send("This index does not exist.")
    }
});


router.get('/Films', function (req, res) {
    let arr = [{id:1 , name:"Interstellar"},{id:2 , name:"Gravity"},{id:3 , name:"The Martian"}]

    res.send(arr);
});

router.get('/Films/:FilmID', function (req, res) {
    let arr = [{id:1 , name:"Interstellar"},{id:2 , name:"Gravity"},{id:3 , name:"The Martian"}]
    let arrLen = arr.length;
    let b = 0;
    let a = Number(req.params.FilmID);
    for(let i = 0; i <arrLen; i++){
        if(arr[i].id===a){
            res.send(arr[i]);
            b=1;
            break
        }
    } if (b===0){
        res.send("Movie doesn't exists with this ID =" + a)
    }
});




module.exports = router;        