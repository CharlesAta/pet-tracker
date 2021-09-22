const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');
const authToken = require("../../config/auth");

router.post('/signup', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.get('/:userid', usersCtrl.show);
router.put('/:userid/update', usersCtrl.update)


//use the auth code as a middleware before the route used to send a response back after checking verification
router.get("/verify", authToken, usersCtrl.verify);


module.exports = router;