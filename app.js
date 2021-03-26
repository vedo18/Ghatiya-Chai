require("dotenv").config();

const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const Stripe = require("stripe")

const app = express();


const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const makePayment = require("./routes/stripepayment");





app.use(bodyParser());
app.use(cookieParser());
app.use(cors());


app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
app.use("/api",orderRoutes);
app.use("/api",makePayment);



mongoose.connect(process.env.DATABASE ,
    {useNewUrlParser: true, useUnifiedTopology: true, newCreateIndex: true})
    .then(()=> {
        console.log("DB connected");
    })
    
    const port = process.env.PORT ||  5000;
    
    if(process.env.NODE_ENV ==='production'){
        app.use(express.static('client/build')) 
        const path = require("path")
        app.get("*",(req,res)=>{
            res.sendFile(path.resolve(__dirname,'client','build','index.html'))
        })
    
    }

app.listen(port, () => {
    console.log(`app is running at port ${port}`);

});