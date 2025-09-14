import express from "express";
import {
  addTransaction,
  deleteTransaction,
  getTransactions,
  updateTransactions,
} from "../controllers/transactionController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const transactionRouter = express.Router();

transactionRouter.post("/:id/add", authMiddleware, addTransaction);
transactionRouter.get("/:id/all", authMiddleware, getTransactions);
transactionRouter.put("/:id/update", authMiddleware, updateTransactions);
transactionRouter.delete("/:id/delete", authMiddleware, deleteTransaction);

export default transactionRouter;
