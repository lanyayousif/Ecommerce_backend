import express from "express";
import path from "path";
import  swaggerUi from "swagger-ui-express";
// import swaggerSpecs from "./config/swagger.js"
import catagoryRouter from "./router/catagoryRouter.js";
import productRouter from "./router/productRouter.js";
import cartRouter from "./router/cartRouter.js";
import userRouter from "./router/userRouter.js";

import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import { connectDb } from "./config/db.js";
import "./strategy/autho.js";
import { isAdmin, protect } from "./middleware/auth.middleware.js";
import { errorHandler } from "./middleware/errorHandller.middleware.js";

const app = express();

connectDb();

app.use(cors());
app.use(express.json());

// if(process.env.NODE_ENV === "devlopment"){
//     app.use(morgan("dev"))
// }
// app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpecs))

app.use("/product", productRouter);
// app.use(protect) // agar bmanawe hamu route akn la xwari amawa ainusin protect bkain
app.use("/catagory", catagoryRouter);
app.use("/cart",cartRouter);
// app.use("/cart", protect,isAdmin,cartRouter);
app.use("/user", userRouter);
app.use(errorHandler)


const __dirname=path.resolve() // director yakamn bo aheni path akai
app.use("/uploads",express.static(path.join(__dirname,"/uploads"))) 
// express.static() bo awai xpress bzani static controllerman nayawati

console.log("test")

export default app;
