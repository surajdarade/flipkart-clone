import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDB database ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Error in MongoDB connection- ${error}`);
  }
};
export default connectDB;
