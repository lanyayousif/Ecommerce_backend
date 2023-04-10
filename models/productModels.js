import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  // productTitle: { type: String, required: true },
  // productSize:{type: Number, required: true},
  // productRaiting:{type:Number ,required: true},
  // ProductPrice:{type:Number,required: true},
  // productImgcard:[{type:String ,required: true}],
  // productImgPage:[{type:String ,required: true}],
  // productDetailse: { type: String, required: true },
  // productIntegrate: { type: String, required: true },
  // productUse: { type: String, required: true },
  // productReviews: { type: Number, required: true },
  // isActive: { type: Boolean, required: true },
  // productLiked:{ type: Boolean, required: true }

});

const product = mongoose.model("product", productSchema);
export default product;
