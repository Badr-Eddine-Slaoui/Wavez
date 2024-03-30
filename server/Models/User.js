const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    age: {
        type : Number,
        required : true
    },
    email: {
        type : String,
        required : true,
        unique: true
    },
    password: {
        type : String,
        required : true
    }
},{
    versionKey: false,
    timestamps: true,
    toJSON: {
        transform:(_,ret)=>{
            const { _id : id } = ret ;
            delete ret._id ;
            delete ret.createdAt ;
            delete ret.updatedAt ;
            delete ret.password ;
            return { id , ...ret}
        } 
    },
    toObject: {
        transform:(_,ret)=>{
            const { _id : id } = ret ;
            delete ret._id ;
            delete ret.createdAt ;
            delete ret.updatedAt ;
            delete ret.password ;
            return { id , ...ret}
        } 
    }
})

module.exports = model('User', userSchema);