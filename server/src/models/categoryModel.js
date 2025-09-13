import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: false,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ["income", "expense"],
    required: true,
  },
  icon: String,
  color: {
    type: String,
    default: "#13103b",
  },
});

export const categoryModel =
  mongoose.models.category || mongoose.model("category", categorySchema);
