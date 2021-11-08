// -------Module 3---------------
function trim(name){
  console.log(name.trim())
}

function changetoLowerCase(name){
    console.log(name.toLowerCase())
}

function changetoUpperCase(name){
    console.log(name.toUpperCase())
}


module.exports.trimExpo  = trim
module.exports.lowerCaseExpo  = changetoLowerCase
module.exports.upperCaseExpo  = changetoUpperCase
