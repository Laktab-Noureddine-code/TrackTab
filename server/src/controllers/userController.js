import userModel from "../models/userModel.js";

const getAccountOverview = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await userModel.findById(userId);

    if (!user) {
      res.status(404).json({ succuss: false, message: "User is not found" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
