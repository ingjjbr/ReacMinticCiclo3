const jwt = require('jsonwebtoken');
const pas = process.env.JWT_KEY;
verifyToken = (req,res,next)=>{
    const{token}=req.headers;
    console.log('middleware',token);
    jwt.verify(token,pas,function(err,decoded){
        if(err){
            console.log(error);
            res.status(401).send('No autorizado',err);
            return;
        }
        console.log(decoded)
        next();
    });
}
module.exports = {
    verifyToken
}