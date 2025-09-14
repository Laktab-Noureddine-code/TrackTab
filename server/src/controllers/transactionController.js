import { serverErrorMessage } from "../config/messages.js";
import cardModel from "../models/cardModel.js";
import { categoryModel } from "../models/categoryModel.js";
import { transactionModel } from "../models/transactionModel.js";

export const addTransaction = async (req, res) => {
  try {
    const cardId = req.params.id;
    const userId = req.user.id;
    const { type, amount, description, date, categoryId } = req.body;
    const category = await categoryModel.findById(categoryId);
    const card = await cardModel.findOne({ _id: cardId, userId });
    if (!type || amount || description || date || categoryId) {
      return res
        .status(400)
        .json({ success: false, message: "all fields required" });
    }
    if (!card) {
      return res.status(404).json({
        succuss: false,
        message: "Card not found or not owned by user",
      });
    }
    if (!category) {
      return res.status(404).json({
        succuss: false,
        message: "category not found",
      });
    }

    const transaction = await transactionModel.create({
      cardId,
      type,
      amount,
      description,
      date,
      categoryId,
    });
    res.status(201).json({ success: true, transaction });
  } catch (err) {
    res.status(500).json({ message: err.message, success: false });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const cardId = req.params.id;
    const userId = req.user.id;
    const card = await cardModel.findOne({ _id: cardId, userId });
    if (!card) {
      return res
        .status(404)
        .json({ success: false, message: "Card not found" });
    }
    const transactions = await transactionModel.find({ cardId });
    res.status(200).json({ success: true, transactions });
  } catch (err) {
    res.status(500).json({ message: serverErrorMessage, success: false });
  }
};
