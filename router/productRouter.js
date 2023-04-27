import { Router } from "express";
import {
  getAllProduct,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
  deleteAllProduct,
} from "../controller/productController.js";
import { resizeImage, uploadMulti, uploadSingle } from "../middleware/multer.middleware.js";

const router = Router();
router.route("/").get(getAllProduct).post(addProduct).delete(deleteAllProduct);
router.route("/:id").delete(deleteProduct).patch(updateProduct).get(getProductById);

router.route("/upload").post(uploadSingle,resizeImage,(req,res)=>{
  console.log(req.file)
  res.send(req.file.filename)
})
router.route("/upload-multi").post(uploadMulti,(req,res)=>{
  console.log(req.files)
  res.send(req.files)
})

export default router;