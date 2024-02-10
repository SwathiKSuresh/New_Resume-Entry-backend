const cors=require("cors")
const express=require("express")
const mongoose=require("mongoose")

const resumeRouter=require("./Controllers/resumeRouter")
const entryRouter=require("./Controllers/entryRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Swathi:Swathi123@cluster0.om2gp.mongodb.net/ResumeDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/resume",resumeRouter)
app.use("/api/entry",entryRouter)

app.listen(3003,()=>{
    console.log("Server running")
})