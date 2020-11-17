const User = require("../models/user");
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
const bcrypt = require('bcrypt');
const { json } = require("body-parser");
const saltRounds = 10;

exports.signup = (req, res) => {
    const error = validationResult(req);
  
    if (!error.isEmpty()) {
      return res.status(422).json({
        error: error.array()[0].msg
      });
    }
  
    const user = new User(req.body);
    user.save((error, user) => {
      if (error) {
        return res.status(400).json({
          error: "NOT able to save user in DB"
        });
      }
      res.json({
        name: user.name,
        email: user.email,
        id: user._id
      });
    });
  };
  
    
exports.signin = (req,res) =>{
    const errors = validationResult(req);
    const {email,password} = req.body;
    

    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() [0].msg
        });             
      }

      User.findOne({email},(error,user)=>{
          if(error || !user){
              res.status(400).json({
                  error: "User not found"
              })
          }

          bcrypt.compare(req.body.password, user.password, function(error, result) {
            if(result == true) {
            //CREATE TOKEN
            const token = jwt.sign({_id:user._id},process.env.SECRET)
            //PUT TOKEN TO COOKIE
            res.cookie("token",token,{expire : new Date()+9999});

         


         

         //send response to front end
         const{_id,name,email,role} = user;
         return res.json({
             token,
             user :{
                 _id,name,email,role 
             }
         });
        }
        else{
            return res.status(400).json({
                error:" password doesn't match"
            })
        }

        
        });
      });
};

exports.signout = (req,res) =>{
    res.clearCookie("token");
    res.json ({
        message: "signout successfully"
    });

};

exports.isSignedIn = expressJwt({
    secret: process.env.SECRET,
    userProperty : "auth"
});

exports.isAuthenticated = (req,res,next) =>{
    let checker = req.profile && req.auth && req.profile._id == req.auth._id
      if(!checker){
          return res.status(403).json({
              error: "YOu are not a user.Please signup"
          });
      }
        next();
    };
    
    exports.isAdmin = (req,res,next) =>{
    
    if(req.profile.role==0){
        return res.status(403).json({
      error:"Please Go.Only Admin allowed here"
        });
    }
        next();
    };