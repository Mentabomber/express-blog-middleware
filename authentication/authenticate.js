


function withAuth (req, res, next) {
if(true){

return res.sendStatus(401);
}
next()

}

module.exports = {
    withAuth
}