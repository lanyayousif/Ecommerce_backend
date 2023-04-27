import CartItem from "../models/cartItemsModel.js";
import product from "../models/productModels.js";

export const getAllCartItem= async (req, res) => {
  try {
    const cartItem = await CartItem.find().populate("product");
    console.log("cartItem");
    res.json({ status: "sucsess", data: cartItem });
  } catch (error) {
    res.status(404).json({ status: "error", message: "error" });
  }
};
export const addCartItem = async (req, res) => {
  try {
    const cartItem = await CartItem.create(req.body);
    res.json({ status: "sucsess", data: cartItem });
  } catch (error) {
    res.status(400).json({ status: "error haia", message: error });
  }
};
export const getCartItemById = async (req, res) => {
  try {
    const cartItem = await CartItem.findById(req.params.id);
    res.json({ status: "sucsess", data: cartItem });
  } catch (error) {
    res.status(404).json({ status: "error", message: error });
  }
};

export const deleteCartItem = async (req, res) => {
  try {
    const id = req.params.id;
    const cartItem = await CartItem.findByIdAndDelete(id);
    res.json({ status: "sucsess", data: cartItem });
  } catch (error) {
    res.status(404).json({ status: "error", message: error });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const id = req.params.id;
    const cartItem = await CartItem.findByIdAndUpdate(
      id,
      { $push: { product: req.body.product } },

      { new: true }
    );
    res.json({ status: "sucsess", data: cartItem });
  } catch (error) {
    res.status(404).json({ status: "error", message: error });
  }
};


//
// {
//   " product":"643c2d42cb0c395d2913ec25" la body yakaia ama anusin bo updateka
// }
