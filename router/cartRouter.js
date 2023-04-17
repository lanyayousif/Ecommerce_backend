import { Router } from "express";
import { addCart, getAllCart} from "../controller/cartController.js";

const route =Router()
router.route("/").get(getAllCart).post(addCart);
// router.route("/:id").delete(deleteCart).patch(updateCart).get(getCartById);

export default router;