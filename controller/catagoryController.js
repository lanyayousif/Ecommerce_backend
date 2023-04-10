import Catagory from "../models/catagoryModels.js"

export const addcatagory= async(req,res)=>{
try {
    const catagory=await Catagory.create(req.body)
    res.json({status:"sucsess",data:catagory})
} catch (error) {
    res.ststus(400).json({status:"error",messge:error})
}

}

export const getAllCatagory=async(req,res)=>{
try {
    const catagory=await Catagory.find()
    res.json({status:"sucsess",data:catagory})
} catch (error) {
    res.ststus(404).json({status:"error",messge:error})
}
}

