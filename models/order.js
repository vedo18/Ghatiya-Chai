const mongoose = require("mongoose");
const{ObjectId} =  mongoose.Schema;
const ProductCartSchema = new mongoose.Schema({
    product:{
        type:ObjectId,
        ref:"Prodcut"
    },
    name:String,
    count :Number,
    price: Number
}
)
const Productcart = mongoose.model ("Productcart",ProductCartSchema);

const OrderSchema= new mongoose.Schema({
    products:[ProductCartSchema],
    transaction_id : {},
    amount :{type:Number},
    address: String,
    status : {
         type: String,
         default : "Received",
         enum: ["Cancelled","Delivers","Shipped","Processing","Received"]
    },
    updated: Date,
    user:{
        type:ObjectId,
        ref:"User",
    }

},
{timestamps:true}
);


const Order = mongoose.model ("Order",OrderSchema);

module.exports ={Order,Productcart};