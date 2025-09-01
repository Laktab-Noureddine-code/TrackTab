import mongoose from "mongoose";

const connectDb = async () => {
  const dbUri = process.env.MONGODB_URI;
  try {
    await mongoose.connect(dbUri);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

export default connectDb;
