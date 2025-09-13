import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDb from "./src/config/mongodb.js";
import cardRouter from "./src/routes/cardRouter.js";
import authRouter from "./src/routes/authRouter.js";
import categrySeeder from "./src/seeds/categrySeeder.js";

dotenv.config();
// *1. connect to database
connectDb();
categrySeeder();

// create app server
// *2. creation d'une application express
const app = express();
const PORT = process.env.PORT || 8000;

// *3. ajoute des middlewares
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [process.env.CLIENT_URL];
// Enable sending cookies and HTTP authentification across origins
app.use(cors({ origin: allowedOrigins, credentials: true }));

// Api routes
app.use("/api/auth", authRouter);
app.use("/api/card", cardRouter);

// *4. demarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
