import { Router } from "express";
import { addcatagory, deleteCatagory, getAllCatagory, getCatagoryById, updateCatagory } from "../controller/catagoryController.js";

const router=Router()
router.route("/").get(getAllCatagory).post(addcatagory)
router.route("/:id").get(getCatagoryById).patch(updateCatagory).delete(deleteCatagory)


export default router


