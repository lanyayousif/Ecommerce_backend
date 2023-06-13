import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  productName: { type: String, required: false },
  productTitle: { type: String, required: false },
  productDescription:{ type: String, required: false },
  productType:{ type: String, required: false },
  productSize:{type: String, required: false},
  ProductPrice:{type:Number,required: false},
  ProductDiscountPrice:{type:Number,required: false},
  productImgcard:[{type:String ,required: false}],
  productImgcardHover:[{type:String ,required: false}],
  productImgPage:[{type:String ,required: false}],
  productImgFree:[{type:String ,required: false}],
  productDetailse: { type: String, required: false },
  productIntegrate: { type: String, required: false },
  productUse:{type: String, required: false },
  productReviews:{ type: Number, required: false },
  productRaiting:{type:Number ,required: false},
  productLiked:{ type: Boolean, required: false },
  
  // cartItemId: { type: mongoose.Types.ObjectId, ref: "cartItem" },
  cart_items:[{type:mongoose.Types.ObjectId,ref:"cart"}],
  catagoryId:{type:mongoose.Types.ObjectId,ref:"catagory",required:false},
});

productSchema.virtual('currentPrice').get(function(){
  return this.ProductDiscountPrice ?? this.ProductPrice
})

productSchema.pre('save', function (next) {
  this.currentPrice = this.ProductDiscountPrice || this.ProductPrice;
  next();
});
const product = mongoose.model("product", productSchema);
export default product;
// productReviews: [
//   {
//     author: { type: String, required: true },
//     reviewRating: { type: Number, required: true },
//   },
// ],
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