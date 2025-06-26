import mongoose from "mongoose";
import { MONGODB_URI } from "../config/serverConfig.js";

export const connectDB = async () => {
  try {
    // console.log(process.env.MONGODB_URI);
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
