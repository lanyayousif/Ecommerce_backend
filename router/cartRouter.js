import { Router } from "express";
import { addCart, deleteCart, getAllCart, getCartById, updateCart} from "../controller/cartController.js";
import { protect } from "../middleware/auth.middleware.js";

const router =Router()
router.route("/").get(getAllCart).post(protect,addCart).delete(deleteCart);
router.route("/:id").patch(updateCart).get(getCartById).delete(deleteCart);

export default router;