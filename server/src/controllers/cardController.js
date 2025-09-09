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
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateCard = async (req, res) => {
  const cardId = req.params.id;
  const userId = req.user.id;
  const { name, balance, type } = req.body;
  if (!userId || !name || !balance || !type) {
    res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    // 1. find the card
    const card = await cardModel.findByIdAndUpdate(
      cardId,
      {
        name,
        balance,
        type,
      },
      {
        new: true,
      }
    );
    if (!card) {
      res.status(404).json({ success: false, message: "Card not found" });
    }
    // 2. verify the owner
    if (deletedCard.userId.toString() !== userId) {
      return res
        .status(403)
        .json({ success: false, message: "Not authorized" });
    }

    res.status(200).json({ success: true, card });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteCard = async (req, res) => {
  const cardId = req.params.id;
  const userId = req.user.id;
  try {
    // 1. find the card
    const deletedCard = await cardModel.findById(cardId);
    if (!deletedCard) {
      res.status(404).json({ success: false, message: "Card not found" });
    }
    // 2. verify the owner
    if (deletedCard.userId.toString() !== userId) {
      return res
        .status(403)
        .json({ success: false, message: "Not authorized" });
    }

    // 3. delete the card
    await cardModel.findByIdAndDelete(cardId);

    res.status(201).json({
      success: true,
      message: `Card ${deletedCard.name} deleted successfuly`,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getCards = async (req, res) => {
  const userId = req.user.id;
  try {
    const userCards = await cardModel.find({ userId: userId });
    res.status(200).json({ success: true, userCards });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
