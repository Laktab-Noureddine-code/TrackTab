import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    profile: {
      type: String,
      required: false,
      default: "https://www.pinterest.com/pin/848295279848926052/",
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
