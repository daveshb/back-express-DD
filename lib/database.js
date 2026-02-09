import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();


export const dbConnection = async () => {
  try {
    const mongoUri = process.env.MONGO_URI
    await mongoose.connect(mongoUri);

    console.log("db online")


  } catch (err) {
    console.log(err);
  }
};


