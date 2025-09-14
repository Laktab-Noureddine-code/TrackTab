import express from "express";
import { addTransaction, getTransactions } from "../controllers/transactionController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const transactionRouter = express.Router();

transactionRouter.post("/:id/add",authMiddleware ,addTransaction);
transactionRouter.get("/:id/all",authMiddleware ,getTransactions);

export default transactionRouter;