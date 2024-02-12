const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userRouter=require("./controller/userRouter")
const postRouter=require("./controller/postRouter")

const app=express()


app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://aleena2681:alee@cluster0.okresfv.mongodb.net/userDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)
app.use("/api/blog",userRouter)
app.use("/api/blog",postRouter)

app.listen(3001,()=>{
    console.log("server running")
})