import { Router } from "express";
import { addCart, deleteCart, getAllCart, getCartById, updateCart} from "../controller/cartController.js";

const router =Router()
router.route("/").get(getAllCart).post(addCart).delete(deleteCart);
router.route("/:id").patch(updateCart).get(getCartById).delete(deleteCart);

export default router;