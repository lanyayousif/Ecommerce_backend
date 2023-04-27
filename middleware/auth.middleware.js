import passport from "passport";
import jwt from "jsonwebtoken";
import users from "../models/UserModel.js";

export const loginMiddleware = async function (req, res, next) {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        // const error = new Error("An error occurred.");
        // return next(error);
        throw new CustomError("not user fount", 404, "5000");
      }
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, process.env.TOP_SECRET, {
          expiresIn: "7 day",
        });
        return res.json({ token });
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
};

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
