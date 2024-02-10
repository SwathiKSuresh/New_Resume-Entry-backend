const mongoose=require("mongoose")
const entrySchema=new mongoose.Schema(
    {
        name:String,
        address:String,
        email:String,
        phone:String,
        pgBranch:String,
        pgMark:String,
        degreeBranch:String,
        degreeMark:String,
        skills:String,
        achievements:String,
        extraCurricular:String,
        hobbies:String
    }
)
module.exports=mongoose.model("entries",entrySchema)