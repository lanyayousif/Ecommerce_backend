// import path from "path"
// import fs from "fs"
import Product from "../models/productModels.js";

export const getAllProduct = async (req, res) => {
  try {
    const product = await Product.find();
    console.log("product")
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
    const product = await Product.create(req.body);
    res.json({ status: "sucsess", data: product });
  } catch (error) {
    res.status(400).json({ status: "error haia", message: error });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ status: "sucsess", data: product });
  } catch (error) {
    res.status(404).json({ status: "error", message: error });
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
