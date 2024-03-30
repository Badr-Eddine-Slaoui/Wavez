const { Schema, model } = require('mongoose');

const commandSchema = new Schema({
    products : {
        type : [Object],
        required : true
    },
    totalPrice: {
        type : Number,
        required : true
    },
    email: {
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
            return { id , ...ret}
        } 
    },
    toObject: {
        transform:(_,ret)=>{
            const { _id : id } = ret ;
            delete ret._id ;
            delete ret.createdAt ;
            delete ret.updatedAt ;
            return { id , ...ret}
        } 
    }
})

module.exports = model('Command', commandSchema);