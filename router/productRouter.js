import { Router } from "express";
import {
  getAllProduct,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
} from "../controller/productController.js";

const router = Router();
router.route("/").get(getAllProduct).post(addProduct);
router.route("/:id").delete(deleteProduct).patch(updateProduct).get(getProductById);

export default router;