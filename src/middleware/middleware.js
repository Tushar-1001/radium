const mid = function (req, res, next) {
    let checkFreeApp = req.headers['isfreeapp']
        if (!checkFreeApp) {
            res.send({ "msg": "Request is missing a mandatory header" })
            
        } else {
            if(checkFreeApp === 'true') {
                checkFreeApp = true
            } else {
                checkFreeApp = false
            }
            req.isFreeAppUser = checkFreeApp
            next()
        }
    }
    module.exports.mid = mid
// ----------------------------------------------------------------------------------
    