// -------Module 1---------------
function log(name){
    console.log(name)
}

function welcome(){
    console.log('Welcome to my application. I am learning Node at FunctionUp bootcamp.')
}

const url = 'http://google.com/'


module.exports.logName  = log
module.exports.welcomeExpo  = welcome
module.exports.urlExpo  = url


