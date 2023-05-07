import passport from "passport";
import jwt from "jsonwebtoken";
import users from "../models/UserModel.js";

export const signupMiddleware=passport.authenticate("signup", { session: false })


export const protect = passport.authenticate("jwt", { session: false });

//  am middleware bo cheack krdnawai awia admin bet yan
export const isAdmin = async (req, res, next) => {
  try {
    const user = await users.findById(req.user._id);
    if (!user || user.role !== "admin") {
      return res.status(401).json("not authorized");
    }
    next();
  } catch (error) {
    res.status(400).json(error);
  }
};
export const isUser = async (req, res, next) => {
  try {
    const user = await users.findById(req.user._id);
    if (!user || user.role !== "user") {
      return res.status(401).json("not authorized");
    }
    next();
  } catch (error) {
    res.status(400).json(error);
  }
};
