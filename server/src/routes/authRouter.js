import express from "express";
import {
  getUser,
  login,
  logout,
  register,
} from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const authRouter = express.Router();
authRouter.post("/register", register);
authRouter.post("/login", authMiddleware, login);
authRouter.post("/logout", authMiddleware, logout);
authRouter.get("/me", authMiddleware, getUser);

export default authRouter;
