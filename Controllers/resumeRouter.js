const express=require("express")
const resumeModel=require("../Models/resumeModel")
const router=express.Router()

const bcrypt=require("bcryptjs")

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/register",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
    hashPasswordGenerator(password).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
            data.password=hashedPassword
            console.log(data)
            let resume=new resumeModel(data)
            let result=resume.save()
            res.json({
                status:"success"
            })
        }
    )
})
module.exports=router