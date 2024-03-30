const Command = require("../Models/Command");

const addCommand = async(req,res)=>{
    try{
        const command = await Command.create(req.body)
        res.status(200).json({
            status: "success",
            data: {
                command
            },
        })
    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err.message,
        })
    }
}

module.exports = { addCommand };