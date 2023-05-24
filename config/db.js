import mongoose from "mongoose";

export const connectDb = async () => {
  console.log(process.env.DB_URL);
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("database is connected");
  } catch (error) {
    console.log("error connect : " + error);
  }
};
