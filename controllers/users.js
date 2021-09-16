const UserModel = require("../models/user");
const jwt = require('jsonwebtoken'); 

module.exports = {
    create,
}

async function create(req, res) {
    try {
      const user = await UserModel.create({
          name: req.body.name, 
          email:req.body.email, 
          password:req.body.password, 
          phoneNumber: req.body.phoneNumber, 
          postalCode: req.body.postalCode
        });
       
      const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
      res.status(200).json(token);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  