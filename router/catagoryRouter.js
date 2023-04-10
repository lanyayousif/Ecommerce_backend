import { Router } from "express";
import { addcatagory, getAllCatagory } from "../controller/catagoryController.js";

const router=Router()
router.route("/").get(getAllCatagory).post(addcatagory)
// router.route("/:id").get()


export default router


