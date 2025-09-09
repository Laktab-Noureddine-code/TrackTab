import cardModel from "../models/cardModel.js";

export const addCard = async (req, res) => {
  const { name, balance, type } = req.body;
  const userId = req.user.id;
  if (!userId || !name || !balance || !type) {
    res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const card = await cardModel.create({ userId, name, balance, type });
    res.status(200).json({ success: true, card });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};
