const postmodels = require ("../models/postmodel")
const usermodels=require("../models/usermodel")



const createpost=async function(req,res){
    try{
    let data=req.body
    let userId=req.params.userId
  
    const {img,tags,posts,captions}=data
    if(!data){
        return res.status(400).send({status:false,msg:"please provide appropriate data"})
    }
    if(!img){
        return res.status(400).send({status:false,msg:"img is mandatory"})
    }
    if(!tags){
        return res.status(400).send({status:false,msg:"tags is mandatory"})
    }
    if(!userId){
        return res.status(400).send({status:false,msg:"userId is mandatory"})
    }
    if(!posts){
        return res.status(400).send({status:false,msg:"posts is mandatory"})
    }
  
    if(!captions){
        return res.status(400).send({status:false,message:"captions is mandatory"})
    }


    if (req.decode.userId !== userId ) {
        res.status(401).send({ status: false, msg: "Not Authorized" })
    }

    const newPost=await postmodels.create(data)
    return res.status(201).send({status:true,msg:"post created successfully",data:newPost})
}
catch(error){
return res.status(500).send({status:false,msg:error.message})
}
}


module.exports.createpost=createpost