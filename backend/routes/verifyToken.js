const jwt =require('jsonwebtoken');
var dotenv=require('dotenv');


module.exports = function (req, res,next){
const token = req.header('addUser-token');
if(!token) return res.status(401).send('sorry, no access');

try{
const verified = jwt.verify(token, process.env.JWT_SECRET)
req.user = verified;
console.log(verified)
next();

}
catch(err){
res.status(400).send('fuckkkkkkkkkkkkk')
}

}