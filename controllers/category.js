const category = require("../models/category");
const Category = require("../models/category");

exports.getCategoryById =(req,res,next,id)=>{
    Category.findById(id).exec((error,cate)=>{
        if(error){
            return res.status(400).json({
                error:"no category found"
            });
        }
        req.category=cate;
        next();
    });
};


exports.createCategory =(req,res)=>{
    const category = new Category(req.body);
    category.save((error,category)=>{
        if(error){
            return res.status(400).json({
                error:"failed to create"
            });
        }
        res.json(category);
    });
};

exports.getCategory =(req,res)=>{
    return res.json(req.category);
}

exports.updateCategory =(req,res)=>{
    const category = req.category;
    category.name = req.category.name;
    category.save((error,updatecategory)=>{
        if(error){
            return res.status(400).json({
                error:"failed to update"
            });
        }
        res.json(updatecategory);
    });
};

exports.getAllCategory = (req,res) =>{
    Category.find().exec((err,categories)=>{
        if(err){
            return res.status(400).json({
                error:"no category found"
            });
  
        }
        res.json(categories);
    });
};

exports.removeCategory =(req,res)=>{
     const category = req.category;
     category.remove((err,removed)=>{
         if(error){
             return res.status(400).json({
                 error:"failed to remove"
                 
             });
         }
         res.json({
             message:"deleted successfully"
         });
     });
};
