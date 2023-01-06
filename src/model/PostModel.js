const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const postSchema = new mongoose.Schema({

    User: {
      type : ObjectId,
      ref : "USER",
      required : true
    },
    img: {
        type:String,
        required: true 
    },
    like :{
        type : Number,
        default : 0
    },
    comment : {
        type: [String],
    },
    tags: {
        type: String,
    }
}, { timestamps: true }
)
module.exports=mongoose.model("post",postSchema)