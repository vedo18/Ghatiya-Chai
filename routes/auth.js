var express = require('express');
const { signout,signup, signin, isSignedIn } = require('../controllers/auth');
var router = express.Router();
const { check } = require('express-validator');




router.post("/signup",[
    check ("name","name should be atleast of 3 letters").isLength({min:3}),
    check ("email","invalid email").isEmail(),
    check ("password","password should be atleast of 5 letters").isLength({min:3}),
], signup);

router.post("/signin",[
    check ("email","invalid email").isEmail(),
    check ("password","password required").isLength({min:2}),
],signin);

router.get("/signout", signout);

module.exports = router;