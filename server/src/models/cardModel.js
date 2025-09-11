import mongoose from "mongoose";

const cardSchema = mongoose.Schema(
  {
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    name: { type: String, required: true },
    balance: { type: Number, required: true },
    type: { type: String, required: true },
    currency: { type: String, required: true, default: "USD" },
    design: { type: String, required: true, default: "Blue" },
  },
  { timestamps: true }
);
const cardModel = mongoose.models.card || mongoose.model("card", cardSchema);

export default cardModel;
