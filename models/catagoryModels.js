import mongoose from "mongoose";

const catagorySchema=new mongoose.Schema({
catagoryName:{type:String,required:true},
product:[{type:mongoose.Types.ObjectId,ref:"product"}]
})

const catagory=mongoose.model("catagory",catagorySchema)
export default catagory