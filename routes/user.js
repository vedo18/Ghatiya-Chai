const express = require("express");
const router = express.Router();

const{getUserById,getUser, getAllUsers,updateUser, userPurchaseList} = require("../controllers/user");
const{isSignedIn,isAdmin,isAuthenticated} = require("../controllers/auth");

router.param("userId",getUserById);

router.get("/user/:userId",isSignedIn,getUser);


router.put("/user/:userId",isSignedIn,updateUser);

router.get("order//user/:userId",isSignedIn,userPurchaseList);



module.exports =router;