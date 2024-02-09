const express=require("express")
const usermodel=require("../model/usermodel")
const router=express.Router()


router.post("/add",async(req,res)=>{
    let data=req.body
    let user=new usermodel(data)
    let result=await user.save()
    res.json({
        status:"success"
    })
})
module.exports=router