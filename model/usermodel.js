const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:String,
    age:String,
    mob:String,
    address:String,
    email:String,
    pincode:String,
    password:String,
    
   


})

module.exports=mongoose.model("user",userSchema)