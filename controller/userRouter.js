const express=require("express")
const usermodel=require("../model/usermodel")

const router=express.Router()
const bcrypt=require("bcryptjs")

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}


router.post("/add",async(req,res)=>{

    let {data}={"data":req.body}
    let password=data.password
hashPasswordGenerator(password).then(
(hashedPassword)=>{
    console.log(hashedPassword)
    data.password=hashedPassword



console.log(data)

    let user=new usermodel(data)
    let result=user.save()
    res.json({
        status:"success"
    })
})
})

router.post("/signin",async(req,res)=>{
    let input=req.body
    let email=req.body.email
    let data=await usermodel.findOne({"email":email})
    if(!data)
    {
         res.json(
            {
                status:"invalid user"
            }
         )
    }

    console.log(data)
    let dbPassword=data.password
    let inputpassword=req.body.password
    console.log(dbPassword)
    console.log(inputpassword)
    const match=await bcrypt.compare(inputpassword,dbPassword)
    if(!match)
    {
        return res.json(
            {
                status:"invalid password"
            }
        )
    }

res.json({
    status:"success"
})


})
module.exports=router