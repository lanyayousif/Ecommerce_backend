import mongoose from "mongoose";

const cartSchema=new mongoose.Schema({
product_id:{required:true},
quantity:{type:Number,required:true},
price:{type:Number,required:true},
})
const cart=mongoose.model("cart_item",cartSchema)
export default cart


