const UserModel = require('../model/UserModel')
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
    try {
        const data = req.body
        if (Object.keys(data).length == 0)
            return res.status(400).send("give some data  to create user")
            
        const create = await UserModel.create(data)
        return res.status(201).send({ status: true, message: "User Created Successfully", data: create })

    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}



const login = async function (req, res) {
    try {
        const email = req.body.email
        const password = req.body.password
        if (!email)
        return res.status(400).send({ status: false, message: "email is required" })
        if (!password)
        return res.status(400).send({ status: false, message: "password is required" })
        const check = await usermodel.findOne({ email: email, password: password })
        if (!check)
            return res.status(400).send({ status: false, message: "Email or Password Not Match" })
        const create = jwt.sign({ userId: check._id.toString(), password: password }, "Secret-Key-Schbangq", { expiresIn: '12h' })
        return res.status(201).send({ status: true, message: "Token Created", data: create })
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}

const getUser = async function(req, res)  {

    try {

        let data=await Usermodel.find()
        return res.status(200).send({ status: true, message: "User profile details", data: data })
        

    } catch (error) {
        return res.status(500).send({ status: false, Message: error.Message })
    }

   
}
module.exports = {createUser,getUser,login }