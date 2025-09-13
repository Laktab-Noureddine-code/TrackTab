import { serverErrorMessage } from "../config/messages.js";
import { categoryModel } from "../models/categoryModel.js";

export const addCategory = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, type, icon, color } = req.body;
    if (!name || !type || !icon || !color) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const category = await categoryModel.create({
      userId,
      name,
      type,
      icon,
      color,
    });

    res.status(201).json({
      success: true,
      message: "Category added successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: serverErrorMessage });
  }
};

export const getCategories = async (req, res) => {
  try {
    const userId = req.user.id;
    const categories = await categoryModel.find({ userId });
    res.status(200).json({ success: true, categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateCatagory = async (req, res) => {
  try {
    const categoryId = categoryModel.findById(req.params.id);
    if (!categoryId) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }
    const { name, type, icon, color } = req.body;
    if (!name || !type || !icon || !color) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const updatedCategory = await categoryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res
      .status(200)
      .json({ success: true, message: "Category updated", updatedCategory });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const categoryId = categoryModel.findById(req.params.id);
    if (!categoryId) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }
    await categoryModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Category deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
