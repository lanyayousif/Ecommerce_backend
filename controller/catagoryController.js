import Catagory from "../models/catagoryModels.js";

export const addcatagory = async (req, res) => {
  try {
    const catagory = await Catagory.create(req.body);
    res.json({ status: "sucsess", data: catagory });
  } catch (error) {
    res.ststus(400).json({ status: "error", messge: error });
  }
};

export const getAllCatagory = async (req, res) => {
  try {
    const catagory = await Catagory.find().populate("product");
    res.json({ status: "sucsess", data: catagory });
  } catch (error) {
    res.ststus(404).json({ status: "error", messge: error });
  }
};

export const getCatagoryById = async (req, res) => {
    try {
      const catagory = await Catagory.findById(req.params.id);
      res.json({ status: "sucsess", data: catagory });
    } catch (error) {
      res.status(404).json({ status: "error", message: error });
    }
  };
  export const deleteCatagory = async (req, res) => {
    try {
      const id = req.params.id;
      const catagory = await Catagory.findByIdAndDelete(id);
      res.json({ status: "sucsess", data: catagory });
    } catch (error) {
      res.status(404).json({ status: "error", message: error });
    }
  };
  export const updateCatagory = async (req, res) => {
    try {
      const id = req.params.id;
      const catagory = await Catagory.findByIdAndUpdate(
        id,
  
        { $push: { product: req.body.product } },
        { new: true } // bo awai kota datamanbo bgeretawa ka updateman krdwa
      );
      res.json({ status: "sucsess", data: catagory });
    } catch (error) {
      res.status(404).json({ status: "error", message: error });
    }
  };
  