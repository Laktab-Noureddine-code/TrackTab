import mongoose from "mongoose";

const transactionSchema = mongoose.Schema(
  {
    cardId: { type: mongoose.SchemaTypes.ObjectId, ref: "Card" },
    name: String,
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String, required: false },
    date: { type: String, required: false, default: Date.now },
    categoryId: { type: mongoose.SchemaTypes.ObjectId, ref: "Category" },
  },
  {
    timestamps: true,
  }
);

export const transactionModel =
  mongoose.models.transaction ||
  mongoose.model("transactions", transactionSchema);
