const adminmodel = require("../model/AdminModel");
const jwt = require("jsonwebtoken");

const createadmin = async (req, res) => {
  try {
    const data = req.body;
    if (Object.keys(data).length == 0)
      return res.status(400).send("give some data  to create user");
    let { name, phone, email, password } = data;
    if (!data.phone)
      return res
        .status(400)
        .send({ status: false, message: "phone is required" });
    if (!data.name)
      return res
        .status(400)
        .send({ status: false, message: "name is required" });
    if (!data.email)
      return res
        .status(400)
        .send({ status: false, message: "email is required" });
    if (!data.password)
      return res
        .status(400)
        .send({ status: false, message: "password is required" });

    const mail = await adminmodel.findOne({ email: email });
    if (mail)
      return res
        .status(400)
        .send({ status: false, message: "EmailId Already Registered " });

    const isphone = await adminmodel.findOne({ phone: phone });
    if (isphone)
      return res
        .status(400)
        .send({
          status: false,
          message: "phone number is Already Registered ",
        });

    const create = await adminmodel.create(data);
    return res
      .status(201)
      .send({
        status: true,
        message: "admin Created Successfully",
        data: create,
      });
  } catch (error) {
    return res.status(500).send({ status: false, msg: error.message });
  }
};
module.exports.createadmin = createadmin;
