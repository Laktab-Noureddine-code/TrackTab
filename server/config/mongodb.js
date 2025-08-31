import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    mongoose.connection.on("connected", () =>
      console.log("DataBase connected")
    );
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
