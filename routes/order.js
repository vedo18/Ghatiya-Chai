const express = require("express");
const router = express.Router();

const{isAdmin,isAuthenticated,isSignedIn} = require("../controllers/auth");
const{getUserById,pushOrderInPurchaseList} = require("../controllers/user");
const{updateStock} = require("../controllers/product");

const {getOrderById,getAllOrders,getOrderStatus,createOrder,updateStatus} = require("../controllers/order");

//params
router.param("userId",getUserById);
router.param("orderId",getOrderById);

//routes
router.post("/order/create/:userId",
isSignedIn,
isAuthenticated,
pushOrderInPurchaseList,
updateStock,
createOrder);

//read routes
router.get("/order/all/:userId",isSignedIn,isAuthenticated,isAdmin,getAllOrders);


//status of orders

router.get("/order/status/:userId",isSignedIn,isAuthenticated,isAdmin,getOrderStatus);
router.put("/order/:orderId/status/:userId",isSignedIn,isAuthenticated,isAdmin,updateStatus);


module.exports = router;