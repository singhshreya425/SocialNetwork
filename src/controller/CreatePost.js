const PostModel = require("../model/PostModel");
const UserModel = require("../model/UserModel");
const jwt = require("jsonwebtoken");
const { ObjectID } = require("bson");

const createpost = async function (req, res) {
  try {
    let data = req.body;
    let userId = req.params.userId;
    data["User"] = userId;
    const newPost = await PostModel.create(data);
    return res
      .status(201)
      .send({ status: true, msg: "post created successfully", data: newPost });
  } catch (error) {
    return res.status(500).send({ status: false, msg: error.message });
  }
};

const getPost = async function (req, res) {
  try {
    let data = await PostModel.find().sort({ like: 1 });
    return res
      .status(200)
      .send({ status: true, message: "profile details", data: data });
  } catch (error) {
    return res.status(500).send({ status: false, Message: error.Message });
  }
};

const LikePost = async function (req, res) {
  try {
    let userId = req.params.userId;
    let postId = req.params.postId;
    let post = await PostModel.findById(postId).lean().select({__v : 0,createdAt:0,updatedAt:0,_id:0 })
    let alreadyLike = post['likeByUser'].find(element => element ==userId)
    let {likeByUser , ...data } = post
    if(alreadyLike)
    { 
        data["like"] -= 1
        let UpdatePost = await PostModel.findOneAndUpdate(
            { _id: postId , }, {
              "$pull": { likeByUser : userId },
              "$set": {...data}}
          );
        return  res.status(201).send({ status: true, msg: UpdatePost });
    }
    else {
         data["like"] += 1
    let UpdatePost = await PostModel.findOneAndUpdate(
        { _id: postId , }, {
          "$addToSet": { likeByUser : userId },
          "$set": {...data}}      );
          return  res.status(201).send({ status: true, msg: UpdatePost });
        }
        return  res.status(200).send({ status : false , data : " sdjfk"})
  } catch (err) {
    return  res.status(500).send({ status: false, msg: err.message });
  }
};

module.exports = { createpost, getPost, LikePost };
