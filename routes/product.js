const express = require("express");
const router = express.Router();

const{getUserById} = require("../controllers/user");
const{isSignedIn,isAdmin,isAuthenticated} = require("../controllers/auth");
const {getAllProducts,getAllUniqueCategories,getProduct
    ,getProductById,updateProduct,deleteProduct, createProduct,photo}= require("../controllers/product")
//params
router.param("userId",getUserById);
router.param("productId",getProductById);


//actual routes

router.post("/product/create/:userId",isSignedIn,isAdmin,createProduct);

router.get("/product/:productId",getProduct);
router.get("/product/photo/:productId",photo);


router.put("/product/:productId/:userId",isSignedIn,isAdmin,updateProduct);

router.delete("/product/:productId/:userId",isSignedIn,isAdmin,deleteProduct);

//listening routes
router.get("/products",getAllProducts);
router.get("/products/categories",getAllUniqueCategories);


module.exports=router