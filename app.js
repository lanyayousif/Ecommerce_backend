import express from "express";
import catagoryRouter from './router/catagoryRouter.js'
import productRouter from "./router/productRouter.js";
import dotenv from "dotenv";
dotenv.config();
import { connectDb } from "./config/db.js";

const app = express();

connectDb();

app.use(express.json());

// if(process.env.NODE_ENV === "devlopment"){
//     app.use(morgan("dev"))
// }

app.use("/product", productRouter);
app.use("/catagory",catagoryRouter)

export default app;
