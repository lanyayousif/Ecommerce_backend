import express from "express";
import catagoryRouter from './router/catagoryRouter.js'
import productRouter from "./router/productRouter.js";
import cartRouter from "./router/cartRouter.js"
import dotenv from "dotenv";
import cors from "cors"
dotenv.config();
import { connectDb } from "./config/db.js";

const app = express();

connectDb();

app.use(cors());
app.use(express.json());

// if(process.env.NODE_ENV === "devlopment"){
//     app.use(morgan("dev"))
// }

app.use("/product", productRouter);
app.use("/catagory",catagoryRouter)
app.use("/cart",cartRouter)



export default app;
