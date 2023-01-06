const mongoose = require("mongoose")
const postSchema = new mongoose.postSchema({
    post: {
        type: String,
        required: true,
    },
    img: {
        type:String,
        URL:`https://www.google.com/search?q=instagram+images+random&tbm=isch&ved=2ahUKEwiK1p-Ql7H8AhVg_XMBHRHyDw0Q2-cCegQIABAA&oq=instagram+images+random&gs_lcp=CgNpbWcQAzoECCMQJzoFCAAQgAQ6BggAEAgQHlDtCljsH2DyJ2gAcAB4AIABuQGIAZMKkgEDMC44mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=NSe3Y8rnHeD6z7sPkeS_aA&bih=524&biw=568&rlz=1C1CHBF_enIN994IN994#imgrc=0XhN6sZ0gmDZhM&imgdii=UuLCwL8XgnWsQM`,
        required: true 
    },
    captions: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true,
    }
}, { timestamps: true }
)
modules.exports=mongoose.models("post",{postSchema})