import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  totalQuantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  cartItemId: { type: mongoose.Types.ObjectId, ref: "cartItem" },
  userId:{type:mongoose.Types.ObjectId,ref:"user"}
});
const cart = mongoose.model("cart", cartSchema);
export default cart;
