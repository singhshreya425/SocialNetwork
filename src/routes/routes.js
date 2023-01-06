const express =require("express")
const router =express.Router();
const {createUser,getUser,login } = require('../controller/UserController')
const { createpost ,getPost ,LikePost ,getMostLike } = require('../controller/PostController')
const { createadmin} = require('../controller/AdminController')


 router.post("/register",createUser)
 router.post("/login",login)
 router.get("/getuser",getUser)

 
 router.post("/CreatePost/:userId",createpost)
router.put("/LikePost/:userId/:postId",LikePost)
router.get('/getpost',getPost)
router.get('/MostLikePost', getMostLike)

router.post('/createAdmin', createadmin)
module.exports=router