const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true 
    },
    phone: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required:true,
       
    },
    follower : [
        {
            type : ObjectId ,
            ref : "USER"
        }
    ],
    followers :
     {
        type : Number
     },
     following :
     [
        {
            type : ObjectId ,
            ref : "USER"
        }
    ],
    post : [
        {
            type : ObjectId,
            ref : "post"
        }
    ],
    totlaLikeOnPost :{
        type : Number
    },
}, { timestamps: true })
module.exports = mongoose.model('USER', userSchema)