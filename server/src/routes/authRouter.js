import express from "express";
import {
  login,
  logout,
  register,
} from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const authRouter = express.Router();
authRouter.post("/register", register);
authRouter.post("/login", authMiddleware, login);
authRouter.post("/logout", authMiddleware, logout);

export default authRouter;
