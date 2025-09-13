import express from "express";
import { addTransaction } from "../controllers/transactionController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const transactionRouter = express.Router();

transactionRouter.post("/add",authMiddleware ,addTransaction);

export default transactionRouter;