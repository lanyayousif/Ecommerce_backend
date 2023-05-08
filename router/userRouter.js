import { Router } from "express";
import {
  getCurentUser,
  getUser,
  login,
  signup,
} from "../controller/userController.js";
import passport from "passport";
import {  protect, signupMiddleware } from "../middleware/auth.middleware.js";

const router = Router();
router.route("/").get(getUser);
// .post(createUser)

router.route('/signup').post( signupMiddleware,signup);
router.post("/login",login );
router.route("/").get(getUser);
router.route("/currentuser").get(protect, getCurentUser);

export default router;
