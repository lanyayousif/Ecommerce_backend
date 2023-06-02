// import path from "path"
// import fs from "fs"
import catagory from "../models/catagoryModels.js";
import Product from "../models/productModels.js";

export const getAllProduct = async (req, res) => {
  try {
    let query = JSON.stringify(req.query)
    query = query.replace(/\b(gte|gt|lt|lte)\b/g, (match) => `$${match}`);

    let queryObj = JSON.parse(query);
    const excluteQuery = ["sort", "limit", "page", "fields", "search"];
    
    excluteQuery.forEach((key) => {
      delete queryObj[key];
    });
    if (req.query.search) {
      queryObj.productName = new RegExp(req.query.search, "i");
    }
    const getQuery = Product.find(queryObj);

    const countQuery = getQuery.clone();
    const countResults = await countQuery.count();//count number product return

    if (req.query.sort) {
      getQuery.sort(req.query.sort);
    }

    if (req.query.fields) {
      getQuery.select(req.query.fields);
    }
   
    const page = req.query.page || 1;
    const limit = req.query.limit || 3;
    const skip = limit * (page - 1);

    getQuery.skip(skip).limit(limit);

    const product = await getQuery.populate("catagoryId").populate("cart_items");

    res.json({ status: "sucsess", results: countResults, data: product });
  } catch (error) {
    res.status(404).json({ status: "error", message: "error" });
  }

}

export const getAll = async (req, res) => {
  try {
    const product = await Product.find().populate("catagoryId").populate("cart_items");
    console.log("product");
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

    const product = await Product.create(req.body);
    res.json({ status: "sucsess", data: product });
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
