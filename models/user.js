var mongoose = require("mongoose");
const bcrypt = require('bcrypt');



var UserSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
        trim: true,
        maxlength: 32,

    },

    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    userinfo:{
        type: String,
        trim: true
    },
    password :{
        required:true,
        type: String,
        trim:true,
    },
    salt: String ,
    role :{
        type: Number,
        default: 0,
    },
    purchase:{
        type: Array,
        default: [],
    },
});

UserSchema.pre('save',async function(next){
    try{
      const salt =await bcrypt.genSalt(10);
      const passwordhash = await bcrypt.hash(this.password,salt);
      this.password = passwordhash;
      next();
    }
    catch(err) {
        next();
    }
});





module.exports = mongoose.model("User",UserSchema);