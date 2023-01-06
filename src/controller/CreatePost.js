const PostModel = require('../model/PostModel')
const UserModel=require("../model/UserModel")
const jwt = require("jsonwebtoken");

const createpost=async function(req,res){
    try{
    let data=req.body
    let userId=req.params.userId
    data['User'] = userId
    const newPost=await PostModel.create(data)
    return res.status(201).send({status:true,msg:"post created successfully",data:newPost})
}
catch(error){
return res.status(500).send({status:false,msg:error.message})
}
}

const getPost = async function(req, res)  {

    try {

        let data=await PostModel.find().sort({like: 1})
        return res.status(200).send({ status: true, message: "profile details", data: data })
    } catch (error) {
        return res.status(500).send({ status: false, Message: error.Message })
    }

}

const LikePost = async ()=>{
    try{

    }catch(err)
    {
        res.status(500).send({ status : false , msg : err.message})
    }
}

module.exports = { createpost ,getPost }