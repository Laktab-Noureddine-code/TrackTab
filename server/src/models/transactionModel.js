import mongoose from "mongoose";

const transactionSchema = mongoose.Schema(
  {
    cardId: { type: mongoose.SchemaTypes.ObjectId, ref: "Card" },
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    description: String,
    date: { type: String, required: true, default: Date.now },
    categoryId: { type: mongoose.SchemaType.ObjectId, ref: "Category" },
  },
  {
    timestamps: true,
  }
);

export const transactionModel =
  mongoose.models.transaction ||
  mongoose.model("transactions", transactionSchema);
