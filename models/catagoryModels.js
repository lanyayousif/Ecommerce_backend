import mongoose from "mongoose";

const catagorySchema=new mongoose.Schema({
catagoryName:{type:String,required:true}
})

const catagory=mongoose.model("catagory",catagorySchema)
export default catagory