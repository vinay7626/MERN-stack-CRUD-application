const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    designation:{
        type:String,
        required:true
    },
})
const users = new mongoose.model("users",userSchema);
module.exports = users;