import cart from "../models/cartModel.js";
import Users from "../models/UserModel.js";
import { tryCatch } from "../utils/tryCatch.js";

export const createUser = async (req, res,next) => {
  try {
    const user = await Users.create(req.body);
    res.json({ status: "success", data: user });
  } catch (err) {
    res.status(400).json({ status: "error", data: err });
    next(err)
  }
};

export const getUser = async (req, res) => {
  const users = await Users.find().populate(("cartId"));
  try {
    res.json({ status: "success", data: users });
  } catch (err) {
    res.status(400).json({ status: "error", data: err });
    next(err)
  }
};

export const signup = async (req, res,next) => {
  try {
    res.json({ status: "success", data: req.user });
  } catch (err) {
    console.log(err);
    // res.status(400).json({ status: "error", data: err });
    next(err)
  }
};

export const getCurentUser =  tryCatch(async (req, res,next) => {
    const users = await Users.findById(req.user._id);
    res.json({ status: "success", data: users }) 
    // try {
    //   res.json({ status: "success", data: users });
    // } catch (err) {
    //   res.status(400).json({ status: "error", data: err });
    //   next(err)
    // }
  }
  )