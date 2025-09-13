import { serverErrorMessage } from "../config/messages";

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
