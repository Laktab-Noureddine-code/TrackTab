import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    profile: {
      type: String,
      required: false,
      default: "https://i.pinimg.com/736x/53/26/39/5326390aa1af79e0e3644ef46e8b0589.jpg",
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
