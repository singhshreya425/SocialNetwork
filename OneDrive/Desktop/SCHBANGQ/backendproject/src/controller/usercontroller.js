const usermodel = require("../models/usermodel")

const createUser = async (req, res) => {
    try {
        const data = req.body
        if (Object.keys(data).length == 0)
            return res.status(400).send("give some data  to create user")
        let { title, name, phone, email, password } = data
        if (!data.phone)
            return res.status(400).send({ status: false, message: "phone is required" })
        if (!data.name)
            return res.status(400).send({ status: false, message: "name is required" })
        if (!data.email)
            return res.status(400).send({ status: false, message: "email is required" })
        if (!data.password)
            return res.status(400).send({ status: false, message: "password is required" })
        if (!data.title)
            return res.status(400).send({ status: false, message: "title is required" })

        
        if (title !== "Mrs" && title !== "Mr" && title !== "Miss")
            return res.status(400).send({ status: false, message: "enter valid title" })

        const mail = await usermodel.findOne({ email: email })
        if (mail) return res.status(400).send({ status: false, message: "EmailId Already Registered " })

        const isphone = await usermodel.findOne({ phone: phone })
        if (isphone) return res.status(400).send({ status: false, message: "phone number is Already Registered " })

        const create = await usermodel.create(data)
        return res.status(201).send({ status: true, message: "User Created Successfully", data: create })

    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}

module.exports.createUser = createUser

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

module.exports.login = login