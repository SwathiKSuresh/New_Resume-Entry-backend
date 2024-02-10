const express=require("express")
const entryModel=require("../Models/entryModel")
const router=express.Router()
const bcrypt=require("bcryptjs")

router.post("/add",async(req,res)=>{
    let data=req.body
    let entry=new entryModel(data)
    let result=await entry.save()
    res.json({
        status:"success"
    })
})
module.exports=router