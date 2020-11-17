const { Order } = require("../models/order");
const User = require("../models/user");
const user = require("../models/user");


exports.getUserById = (req,res,next,id)=>{
    User.findById(id).exec((err,user)=>{
        if(err || !user) {
            return res.status(400).json({
                error:"No user found"
            });
        }
        req.profile = user;
        next();
    });
};

exports.getUser =(req,res)=>{
    req.profile.salt = undefined;
    req.profile.password = undefined;

    return res.json(req.profile);
};

exports.updateUser =(req,res)=>{
    User.findByIdAndUpdate(
        {_id:req.profile._id},
        {$set:req.body},
        {new:true,useFindAndModify:false},
        (err,user)=>{
            if(err){
                return res.status(400).json({
                    error:"failed to update"
                });
            }
            req.user.salt = undefined;
            req.user.password = undefined;
            res.json(user);
        }
    );
};

exports.userPurchaseList =(req,res)=>{
    Order.find()({user:req.profile._id})
    .populate("user", "_id name ")
    .exec((err,order)=>{
        if(err){
            return res.status(400).json({
                error:"no order in this account"
            });
        }
         return res.json(order)    
    });
}

exports.pushOrderInPurchaseList =(req,res,next)=>{
    let purchases = any;
    req.body.order.products.forEach(product => {
        purchases.push ({
            _id: product._id,
            name: product.name,
            description: product.description,
            category: product.category,
            quantity:product.quantity,
            amount: req.body.order.amount,
            transaction_id:req.body.order.transaction_id

        });
    });

    User.findByIdAndUpdate(
        {_id:req.profile._id},
        {$push:{purchases:purchases}},
        {new:true},
        (err,purchases)=>{
            if(err){
                return res.status(400).json({
                    error:"unable to save purchase list"
                });

            }
            next();
        }
    );

};