import passport from "passport";
import jwt from "jsonwebtoken";
import customError from "../customError.js";
import cart from "../models/cartModel.js";
import Users from "../models/UserModel.js";
import { tryCatch } from "../utils/tryCatch.js";

// export const createUser = async (req, res,next) => {
//   try {
//     const user = await Users.create(req.body);
//     res.json({ status: "success", data: user });
//   } catch (err) {
//     res.status(400).json({ status: "error", data: err });
//     next(err)
//   }
// };


export const signup = async (req, res,next) => {
  try {
    req.login(req.user,{session:false},async(error)=>{
      if(error){
        return new customError(error.message,401,4001)
      }
      const body={sub:req.user._id,email:req.user.email}
      const token=jwt.sign({ user: body }, process.env.TOP_SECRET, {
        expiresIn: "7 days",
      });
      res.json({
        status: "success",
        data: { user:req.user, token },
      });
    })
  } catch (err) {
    console.log(err);
    next(err)
    // res.status(400).json({ status: "error", data: err });
  }
};

export const login=(req,res,next)=>{
  passport.authenticate("login",async(err,user,info)=>{
    try {
      if(err || !user){
        const error=new customError("no user found",404,"5000")
        next(error)
        return
      }
      req.login(user,{session:false},async(error)=>{
        if(error){
          return new customError(error.message,401,4001)
        }
        const body={sub:user._id,email:user.email}
        const token=jwt.sign({user:body},process.env.TOP_SECRET,{
          expiresIn: "7 days",
        })
        res.json({token})
      })
    } catch (error) {
      next(err)
    }
  })(req,res,next)
}

export const getUser = async (req, res) => {
  const users = await Users.find().populate(("cartId"));
  try {
    res.json({ status: "success", data: users });
  } catch (err) {
    res.status(400).json({ status: "error", data: err });
    next(err)
  }
};

export const getCurentUser =  tryCatch(async (req, res,next) => {
    const users = await Users.findById(req.user.sub).populate("cartId");
    res.json({ status: "success", data: users }) 
    // try {
    //   res.json({ status: "success", data: users });
    // } catch (err) {
    //   res.status(400).json({ status: "error", data: err });
    //   next(err)
    // }
  }
  )