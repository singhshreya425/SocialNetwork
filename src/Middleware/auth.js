const jwt = require("jsonwebtoken");
const adminmodel = require("../models/adminmodel");


const adminauthenticate = (req, res, next) => {
  try {
    let token = req.headers["authorization"];
    if (!token)
      return res.status(400).send({ status: false, msg: "token must be present" });
    token = token.slice(7);
    jwt.verify(token, "key", function (err, decode) {
      if (err) {
        return res.status(401).send({ status: false, message: "Authentication failed" });
      }
      req.decode = decode;
      next();
    });
  } catch (error) {
    return res.status(500).send({status:false,message:error.message})
  }
};

const adminauthorization = async function (req, res, next) {
  try {
    let adminLoggedIn = req.decode;
    let adminId = req.params.adminId;

    let adminAccessing = await adminmodel.findById(adminId);
    if (!adminAccessing) {
      return res.status(404).send({status: false,message: "Error! Please check userid and try again" });
    }

    if (adminAccessing._id.toString() !== adminLoggedIn.userId) {
      return res.status(403).send({ status: false, msg: "Error, authorization failed" });
    }
    next();
  } catch (err) {
    return res.status(500).send({status:false,message:err.message});
  }
};



module.exports = { adminauthenticate, adminauthorization };