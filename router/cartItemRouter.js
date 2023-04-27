import { Router } from "express";
import { addCartItem ,getCartItemById,getAllCartItem,updateCartItem,deleteCartItem} from "../controller/cartItemController.js";


const router =Router()
router.route("/").get(getAllCartItem).post(addCartItem);
router.route("/:id").patch(updateCartItem).get(getCartItemById).delete(deleteCartItem);

export default router;