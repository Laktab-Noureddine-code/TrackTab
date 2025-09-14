import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { deleteUser, getUser, updatePassword, updateUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.put("/me/update", authMiddleware, updateUser);
userRouter.delete("/me/delete", authMiddleware, deleteUser);
userRouter.get("/me", authMiddleware, getUser);
userRouter.put("/me/update-password", authMiddleware, updatePassword);

export default userRouter;
