const UserModel = require("../models/user");
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 6;

module.exports = {
    create,
    login
}

async function create(req, res) {
  console.log("SEING THIS", req.body)
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
      const user = await UserModel.create({
          name: req.body.name, 
          email:req.body.email, 
          password: hashedPassword, 
          phoneNumber: req.body.phoneNumber, 
          postalCode: req.body.postalCode
        });
      console.log(user)
  
      const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
      console.log(token)
      res.status(200).json(token);
      
    } catch (err) {
      res.status(400).json(err);
    }
  }

async function login(req, res) {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!(await bcrypt.compare(req.body.password, user.password))) throw new Error();

    const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
    res.status(200).json(token)
  } catch {
    res.status(400).json('Bad Credentials');
  }
}