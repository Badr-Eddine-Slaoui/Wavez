const jwt = require('jsonwebtoken')

const getEmail = async(req,res,next)=>{
    const { authorization } = req.headers

    let token

    if(authorization && authorization?.startsWith('Bearer')){

        token = authorization?.split(' ')[1]

    }

    const user = jwt.verify(token,"From Amina To Word")
   
    req.body.email = user.email

    next() 
} 

module.exports = { getEmail };