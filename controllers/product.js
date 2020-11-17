const category = require("../models/category");
const product = require("../models/product");
const Product = require("../models/product");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.getProductById =(req,res,next,id)=>{
    Product.findById(id).exec((err,product)=>{
        if(err){
            return res.status(400).json({
                error:"No product found"
            });
        }
        req.product=product; 
        next();
    });
};

exports.createProduct =(req,res)=>{
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req,(error,fields,file)=>{
        if(error){
            return res.status(400).json({
                error:"problem with image"
            });
        }
        //destructure the fields
        const{name,description,price,stock,category}= fields;

        if(!name||!description||!price||!stock||!category){
            return res.status(400).json({
                error:"all fields required"
            });
        }
        //restrictions on fields
        let product = new Product(fields);

        //handle file here
        if(file.photo){
            if(file.photo.size>3000000){
                return res.status(400).json({
                    error:"Too big to upload"
                });
            }
            product.photo.data =fs.readFileSync(file.photo.path);
            product.photo.contentType= file.photo.type;
        }
        //save in DB
        product.save((error,product)=>{
            if(error){
                return res.status(400).json({
                    error:"saveing shirt in db failed"
                });
            }
            res.json(product);
        });
    });
};

exports.getProduct =(req,res)=>{
    req.product.photo = undefined;
    return res.json(req.product);
}
//middleware
exports.photo =(req,res,next)=>{
    if(req.product.photo.data){
        res.set("Content-Type",req.product.photo.contentType)
        return res.send(req.product.photo.data)

    }
    next();
};

exports.updateProduct =(req,res)=>{
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req,(error,fields,file)=>{
        if(error){
            return res.status(400).jsom({
                error :"problem with image"
            });
        }
       

       //updation code
        let product = req.product;
        product = _.extend(product,fields)



        //handle file here
        if(file.photo){
            if(file.photo.size>3000000){
                return res.status(400).json({
                    error:"image size is too big"
                });
            }
            product.photo.data =fs.readFileSync(file.photo.path);
            product.photo.contentType= file.photo.type;
        }

        //save to the DB
        product.save((error,product)=>{
            if(error){
                return res.status(400).json({
                    error:"updation failed"
                });
            }
            res.json(product);
        });
    });

};

exports.deleteProduct =(req,res)=>{
    let product =req.product;
    product.remove((error,deletedproduct)=>{
        if(error){
            return res.status(400).json({
                error:"failed to delte"
            });
        }
        res.json({
            message:"deletion successful",
            deletedproduct
        });
    });

};


exports.getAllProducts = (req,res)=>{
    let limit = req.query.limit ? (req.query.limit) :8;
     let sortBy = req.query.sortBy ?(req.query.sortBy) : "_id";

    Product.find()
    .select("-photo")
    .sort([[sortBy ,"asc"]])
    .populate("category")
    .limit(8)
    .exec((error,products)=>{
        if(error){
            return res.status(400).json({
                error:"no product found"
            });
        }
        res.json(products);
    });
};

exports.getAllUniqueCategories =(req,res)=>{
    Product.distinct("category",{},(error,category)=>{
        if(error){
            return res.status(400).json({
                error:"No categpory found"
            });
        }
        res.json(category);
    });
};

exports.updateStock= (req,res)=>{
    letmyOperations= req.body.order.products.map (prod =>{
        return {
            updateOne:{
                filter:{_id:prod._id},
                update: {$inc :{stock: -prod.count ,sold: +prod.count}}

            }
        }
    });
    Product.bulkWrite(myOperations,{}, (error,products)=>{
        if(error){
            return res.status(400).json({
                error:"bulk operation failed"
            });
        }
        next();
    });
   

};