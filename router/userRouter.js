import { Router } from "express";
import {
  createUser,
  getCurentUser,
  getUser,
} from "../controller/userController.js";
import passport from "passport";
import { loginMiddleware, protect } from "../middleware/auth.middleware.js";

const router = Router();
router.route("/").get(getUser);
// .post(createUser)

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  async (req, res, next) => {
    res.json({
      message: "signup sucsess",
      user: req.user,
    });
  }
);

router.post("/login", loginMiddleware);

router.route("/").get(getUser);

router.route("/currentuser").get(protect, getCurentUser);

export default router;
