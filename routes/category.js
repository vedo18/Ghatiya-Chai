const express = require("express");
const router = express.Router();

const{getUserById} = require("../controllers/user");
const{isSignedIn,isAdmin,isAuthenticated} = require("../controllers/auth");
const {getCategoryById,getCategory,updateCategory,removeCategory, createCategory,getAllCategory} = require("../controllers/category")
//params
router.param("userId",getUserById);
router.param("categoryId",getCategoryById);


//all routes
router.post("/category/create/:userId",isSignedIn,isAdmin,createCategory);

router.get("/category/:categoryId",getCategory);
router.get("/categories",getAllCategory);


router.put("/category/:categoryId/:userId",isSignedIn,isAdmin,updateCategory);

router.delete("/category/:categoryId/:userId",isSignedIn,isAdmin,removeCategory);



module.exports = router;