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
    let aggregateFunction;

    if (req.query.sort) {
      if(req.query.sort==="alphaAZ"){
        getQuery.sort({productName:1});
      }
      else if(req.query.sort==="alphaZA"){
        getQuery.sort({productName:-1});
      }
      else if(req.query.sort==="pricelow"){
        getQuery.sort({ currentPrice: 1 })
        // aggregateFunction=Product.aggregate([
        //   {
        //     $addFields: {
        //       minPrice: {
        //         $cond: {
        //           if: { $eq: ["$ProductDiscountPrice", null] },
        //           then: "$ProductPrice",
        //           else: "$ProductDiscountPrice"
        //         }
        //       }
        //     }
        //   },
        //   {
        //     $sort: { minPrice: 1 }
        //   }
        // ])
      }
      else if(req.query.sort==="pricehigh"){
        getQuery.sort({ currentPrice: -1 })
        // aggregateFunction=Product.aggregate([
        //   {
        //     $addFields: {
        //       maxPrice: {
        //         $cond: {
        //           if: { $eq: ["$ProductDiscountPrice", null] },
        //           then: "$ProductPrice",
        //           else: "$ProductDiscountPrice"
        //         }
        //       }
        //     }
        //   },
        //   {
        //     $sort: { maxPrice: -1 }
        //   }
        // ])
      }
      // getQuery.sort(req.query.sort);
      // console.log(req.query.sort)
    }

    if (req.query.fields) {
      getQuery.select(req.query.fields);
    }
    // else {
    //   getQuery.select("-currentPrice"); 
    // }
   
    const page = req.query.page || 1;
    const limit = req.query.limit || 9;
    const skip = limit * (page - 1);

    getQuery.skip(skip).limit(limit);

    const product = await getQuery.populate("catagoryId").populate("cart_items");
    // const agregatee = await aggregateFunction
    
    // const test= await Product.find({})
    // .exec()
    // .then(products => {
    //   products.forEach(product => {
    //     console.log(product.currentPrice);
    //   });
    // })
    // .catch(err => {
    //   console.error(err);
    // });
    // console.log(test)
    
    
    product.forEach((product) => {
      console.log(product.currentPrice);
    });

    // res.json({ status: "sucsess", results: countResults, data:agregatee? agregatee: product});
    res.json({ status: "sucsess", results: countResults, data: product});
    // res.json({ status: "sucsess", results: countResults, data:product ,agregate: agregatee || ""});
  } catch (error) {
    res.status(404).json({ status: "error", message: error });
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
