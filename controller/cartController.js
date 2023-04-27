import Cart from "../models/cartModel.js";
import product from "../models/productModels.js";

export const getAllCart = async (req, res) => {
  try {
    const cart = await Cart.find().populate("product");
    console.log("cart");
    res.json({ status: "sucsess", data: cart });
  } catch (error) {
    res.status(404).json({ status: "error", message: "error" });
  }
};
export const addCart = async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    res.json({ status: "sucsess", data: cart });
  } catch (error) {
    res.status(400).json({ status: "error haia", message: error });
  }
};
export const getCartById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    res.json({ status: "sucsess", data: cart });
  } catch (error) {
    res.status(404).json({ status: "error", message: error });
  }
};

export const deleteCartItem = async (req, res) => {
  try {
    const id = req.params.id;
    const cart = await Cart.findByIdAndDelete(id);
    res.json({ status: "sucsess", data: cart });
  } catch (error) {
    res.status(404).json({ status: "error", message: error });
  }
};

export const updateCart = async (req, res) => {
  try {
    const id = req.params.id;
    const cart = await Cart.findByIdAndUpdate(
      id,
      { $push: { product: req.body.product } },

      { new: true }
    );
    res.json({ status: "sucsess", data: cart });
  } catch (error) {
    res.status(404).json({ status: "error", message: error });
  }
};
export const deleteCart = async (req, res) => {
  try {
    const id = req.params.id;
    const cart = await Cart.findByIdAndDelete(id);
    res.json({ status: "sucsess", data: cart });
  } catch (error) {
    res.status(404).json({ status: "error", message: error });
  }
};

//
// {
//   " product":"643c2d42cb0c395d2913ec25" la body yakaia ama anusin bo updateka
// }
