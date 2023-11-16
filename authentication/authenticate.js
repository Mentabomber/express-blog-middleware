


function withAuth (req, res, next) {
if(true){

return res.sendStatus(404);
}
next()

}

module.exports = {
    withAuth
}