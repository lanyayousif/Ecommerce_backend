import multer from "multer";
import customError from "../customError.js";
import sharp from "sharp";

// const multerStorage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"uploads")
//     },
//     filename:(req,file,cb)=>{
//         const ext=file.mimetype.split("/")[1]
//         cb(null,`product-${Date.now()}-${Math.round(Math.random()*1000)}.${ext}`)
//     },

// })

const multerStorage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new customError("not an image", 400, 5000));
  }
};

const upload = multer({ storage: multerStorage, fileFilter: fileFilter });
export const uploadSingle = upload.single("photo"); // photo nawi filed akaia la postman akaia bangi akain
export const uploadMulti = upload.array("photos", 5); // bo zyakrdni multi photo limi kai 5

export const resizeImage = async (req, res, next) => {
  req.file.filename = `product-${Date.now()}-${Math.round(
    Math.random() * 1000
  )}.jpeg`;
  await sharp(req.file.buffer)
    .resize(500)
    .toFormat("jpeg")
    .toFile(`uploads/${req.file.filename}`);
  next();
};

export const resizeImages=async (req, res, next) => {
    if(!req.files) next()
    req.body.files=[]
    for (let i = 0; i < array.length; i++) {
        req.body.files.push(
            `product-${Date.now()}-${Math.round(
                Math.random() * 1000
              )}.jpeg`
        ) 
     await sharp(req.files[i].buffer)
        .resize(500)
    .toFormat("jpeg")
    .toFile(`uploads/${req.body.files[i]}`);
     
    }
    next()
}