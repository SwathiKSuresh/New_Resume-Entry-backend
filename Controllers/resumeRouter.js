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

router.post("/login",async(req,res)=>{
    let input=req.body
    let email=req.body.email
    let data=await resumeModel.findOne({"email":email})
    if (!data) {
        return res.json({
            status:"Invalid user"
        })
    }
    console.log(data)
    let dbPassworrd=data.password
    let inputPassword=req.body.password
    console.log(dbPassworrd)
    console.log(inputPassword)

    const match=await bcrypt.compare(inputPassword,dbPassworrd)
    if (!match) {
        return res.json({
            status:"Incorrect password"
        })
    }
    res.json({
        status:"success"
    })
})

module.exports=router