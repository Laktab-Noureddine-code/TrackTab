import cardModel from "../models/cardModel.js";
import userModel from "../models/userModel.js";

export const cardSeeder = async (userId) => {
  const user = userModel.findById(userId);
  if (!user) {
    console.log("User not found for seeding cards");
    return;
  }
  const cards = await cardModel.find({ userId });
  if (cards.length > 0) {
    return;
  }
  await cardModel.create({
    userId,
    name: "Personal Card",
    balance: 5000,
    type: "Debit",
    currency: "USD",
    design: "Blue",
  });
};
