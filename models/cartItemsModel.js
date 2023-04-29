import mongoose from "mongoose";
const cartItemSchema=new mongoose.Schema({
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    // productId: { type: mongoose.Types.ObjectId, ref: "product" },  
    // cartId: { type: mongoose.Types.ObjectId, ref: "cart" },  
})

const cartItem=mongoose.model("cartItem",cartItemSchema)
export default cartItem