import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  totalQuantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  // cartItemId: { type: mongoose.Types.ObjectId, ref: "cartItem" },
  userId: { type: mongoose.Types.ObjectId, ref: "user" ,required: true},
  // productId: [{ type: mongoose.Types.ObjectId, ref: "product",required: true }],
  cartItems: [
    {
      productId: { type: mongoose.Types.ObjectId, ref: "product",required: true },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
});
const cart = mongoose.model("cart", cartSchema);
export default cart;
