import express from "express";
import { getUser, login, logout, register } from "../controllers/authController.js";

const authRouter = express.Router();
authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/me", getUser);


export default authRouter;
