import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
  role:{type:String,default:"admin"},
  cartId: [{ type: mongoose.Types.ObjectId, ref: "cart" }],
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.isValiddPassword=async function (password){
    return await bcrypt.compare(password,this.password)
}

const users = mongoose.model("user", userSchema);
export default users;
