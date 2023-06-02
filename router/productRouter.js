import { Router } from "express";
import {
  getAllProduct,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
  deleteAllProduct,
  getAll,
} from "../controller/productController.js";
import {
  resizeImage,
  resizeImages,
  uploadFildes,
  uploadMulti,
  uploadSingle,
} from "../middleware/multer.middleware.js";

const router = Router();
router.route("/getAll").get(getAll);
router.route("/").get(getAllProduct).post(addProduct).delete(deleteAllProduct);
router.route("/:id").delete(deleteProduct).patch(updateProduct).get(getProductById);

router.route("/upload").post(uploadSingle, resizeImage, (req, res) => {
  // console.log(req.file)
  res.json({ path: `product/${req.file.filename}` });
});
router.route("/upload-multi").post(uploadMulti, resizeImages, (req, res) => {
  res.json({ paths: req.body.files });
});
router.route("/uploadFildes").post(uploadFildes, resizeImages,  (req, res) =>{
    if (req.files) {
      console.log("file successfuly upload");
      res.json({ paths: req.body.files });
      console.log(req.body.files)
    }
    // res.json({ paths: Object.keys(req.files),valuePaths:Object.values(req.files)[0] });
  });

export default router;
