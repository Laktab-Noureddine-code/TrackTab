import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv/config";
import cookieParser from "cookie-parser";
import connectDb from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";


const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));


// apis
app.get("/", (req, res) => {
  res.send("Api working");
});
app.use("/api/auth" ,authRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});