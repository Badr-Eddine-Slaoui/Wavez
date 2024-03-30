const User = require("../Models/User")
const { compare, hash } = require('bcrypt')
const jwt = require('jsonwebtoken')

const signup = async(req,res)=>{
    try{

        const { email , name , age , password , confirmPassword } = req.body;

        if(email,name,age,password,confirmPassword){
            const alreadyExist = await User.findOne({email});
            if(!alreadyExist){
                if(password === confirmPassword){
                    const hashPassword = await hash(password,10);
                    const user = await User.create({email,name,age,password:hashPassword})
                    if(user){
                        const token = jwt.sign(user.toObject(),"From Amina To Word");
                        return res.status(200).json({
                            status: "success",
                            data: {
                                token
                            },
                        })
                    }
                }
        
                return res.status(401).json({
                    status: "fail",
                    message: "Password And Confirm Password Incorrect",
                })
            }

            return res.status(401).json({
                status: "fail",
                message: "This Email Already Exist",
            })
        }

        res.status(401).json({
            status: "fail",
            message: "All Field Required",
        })

    }catch(err){
        res.status(401).json({
            status: "fail",
            message: err.message,
        })
    }
}

const login = async(req,res)=>{
    try{
        const {email , password} = req.body;
        const user = await User.findOne({email})
        if(user){
            
            const isValid = await compare(password,user.password);

            if(isValid){
                const token = jwt.sign(user.toObject(),"From Amina To Word");
                return res.status(200).json({
                    status: "success",
                    data: {
                        token
                    },
                })
            }

        }

        res.status(401).json({
            status: "fail",
            message: "Email Or Password Incorrect",
        })

    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err.message,
        })
    }
}

module.exports = { login , signup };