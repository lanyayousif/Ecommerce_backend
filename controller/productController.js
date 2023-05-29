// import path from "path"
// import fs from "fs"
import catagory from "../models/catagoryModels.js";
import Product from "../models/productModels.js";

export const getAllProduct = async (req, res) => {
  try {
    const product = await Product.find().populate("catagoryId").populate("cart_items");
    res.json({ status: "sucsess", data: product });
  } catch (error) {
    res.status(404).json({ status: "error", message: "error" });
  }
};
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json({ status: "sucsess", data: product });
  } catch (error) {
    res.status(404).json({ status: "error", message: error });
  }
};
export const addProduct = async (req, res) => {
  try {
    console.log(req.body)

    // const product = await Product.create(req.body);

    // await catagory.findByIdAndUpdate(req.body.catagoryId, {
    //   $push: { product: product._id },
    // });
    // res.json({ status: "sucsess", data: product });
  } catch (error) {
    res.status(400).json({ status: "error haia", message: error });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id);
    res.json({ status: "sucsess", data: product });
  } catch (error) {
    res.status(404).json({ status: "error", message: error });
  }
};
export const deleteAllProduct = async (req, res) => {
  try {
    const product = await Product.deleteMany();
    res.json({ status: "sucsess", data: product });
  } catch (error) {
    res.status(404).json({ status: "error", message: error });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(
      id,

      { $push: { cart_items: req.body.cart_items } },
      { new: true }
    );
    res.json({ status: "sucsess", data: product });
  } catch (error) {
    res.status(404).json({ status: "error", message: error });
  }
};
