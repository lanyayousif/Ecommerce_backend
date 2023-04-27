import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productTitle: { type: String, required: true },
  productDescription:{ type: String, required: true },
  productSize:{type: String, required: true},
  ProductPrice:{type:Number,required: true},
  productImgcard:[{type:String ,required: true}],
  productImgPage:[{type:String ,required: true}],
  productImgFree:[{type:String ,required: true}],
  productDetailse: { type: String, required: true },
  productIntegrate: { type: String, required: true },
  productUse:{type: String, required: true },
  productReviews:{ type: Number, required: true },
  productRaiting:{type:Number ,required: true},
  productLiked:{ type: Boolean, required: true },
  
  cartItemId: { type: mongoose.Types.ObjectId, ref: "cartItem" },
  // cart_items:[{type:mongoose.Types.ObjectId,ref:"cart"}],
  catagoryId:{type:mongoose.Types.ObjectId,ref:"catagory",required:true},
});

const product = mongoose.model("product", productSchema);
export default product;
// {
//   "productName":"cerom",
// "productTitle":"Freshly Juiced Vitamin C Drop 3",
// "productDescription":"lorem hi i wanna do it",
// "productSize":"88 oz ",
// "ProductPrice":77,
// "productImgcard":"product",
// "productImgPage":"product2",
// "productImgFree":"free",
// "productDetailse":"lorem",
// "productIntegrate":"lorem",
// "productUse":"use",
// "productRaiting":3,
// "productReviews":66,
// "productLiked":true
// }