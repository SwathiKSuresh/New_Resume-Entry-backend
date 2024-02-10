const mongoose=require("mongoose")
const resumeSchema=new mongoose.Schema(
    {
        name:String,
        email:String,
        phone:String,
        password:String,
    }
)
module.exports=mongoose.model("resume",resumeSchema)