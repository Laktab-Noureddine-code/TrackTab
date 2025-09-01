import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDb from "./config/mongodb.js";
dotenv.config();
connectDb();

// create app server
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

// Enable sending cookies and HTTP authentification across origins
app.use(cors({ credentials: true }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
