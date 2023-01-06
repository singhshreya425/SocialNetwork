const express =require("express")
const router =express.Router();
const {createUser,getUser,login } = require('../controller/CreateUser')
const { createpost ,getPost ,LikePost ,getMostLike } = require('../controller/CreatePost')



 router.post("/register",createUser)
 router.post("/login",login)
 router.get("/getuser",getUser)

 
 router.post("/CreatePost/:userId",createpost)
router.put("/LikePost/:userId/:postId",LikePost)
router.get('/getpost',getPost)
router.get('/MostLikePost', getMostLike)
module.exports=router