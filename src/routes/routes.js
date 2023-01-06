const express =require("express")
const router =express.Router();
const {createUser,getUser,login } = require('../controller/CreateUser')
const { createpost ,getPost } = require('../controller/CreatePost')



 router.post("/register",createUser)
 router.post("/login",login)
 router.get("/getuser",getUser)
 router.post("/CreatePost/:userId",createpost)

module.exports=router