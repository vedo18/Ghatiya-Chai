const mongoose = require("mongoose");
const{ObjectId} = mongoose.Schema
const productSchema = new mongoose.Schema({
   name:{
       type:String,
       required:true,
       maxlength:32,
       trim:true
   },
   description:{
       type:String,
       trim:true,
       required:true,
       maxlength:3000
   },
   category:{
       type:ObjectId,
       ref:"Category",
       required:true
   },
   price:{
       type:Number,
       required:true,
       trim:true,
       maxlength:32,

   },
   stock:{
       type:Number
   },
   sold :{
       type:Number,
       default: 0
   },
   photo:{
       data:Buffer,
       contentType:String
   },




},
{timestamps:true}
);


module.exports = mongoose.model("Product",productSchema)