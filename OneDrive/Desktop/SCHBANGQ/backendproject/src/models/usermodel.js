const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const userSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        enum: ['Mr', 'Mrs', 'Miss'],
        trim: true
    },
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
       
    }
}, { timestamps: true })
module.exports = mongoose.model('USER', userSchema)