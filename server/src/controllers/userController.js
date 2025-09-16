import bcrypt from "bcryptjs";
import cardModel from "../models/cardModel.js";
import { categoryModel } from "../models/categoryModel.js";
import { transactionModel } from "../models/transactionModel.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const getUser = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.status(404).json({ success: false, message: "no token found" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id).select("-password");

    if (!user) {
      res.status(404).json({ success: false, message: "user not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateUser = async (req, res) => {
  const { name, profile } = req.body;
  const userId = req.user.id;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const user = await userModel.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.user.id;

  try {
    // 1. Delete categories
    await categoryModel.deleteMany({ user: userId });

    // 2. Find all user cards
    const cards = await cardModel.find({ user: userId });
    const cardIds = cards.map((card) => card._id);

    // 3. Delete transactions linked to those cards
    await transactionModel.deleteMany({ card: { $in: cardIds } });

    // 4. Delete cards
    await cardModel.deleteMany({ user: userId });

    // 5. Finally delete the user
    await userModel.findByIdAndDelete(userId);

    // 6. Clear cookies (same as logout)
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "User and all related data deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const userId = req.user.id;
  if (!oldPassword || !newPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const user = await userModel.findById(userId);
  try {
    // const password

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Old password is incorrect" });
    }
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    await userModel.findByIdAndUpdate(userId, { password: hashedNewPassword });
    res
      .status(200)
      .json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
