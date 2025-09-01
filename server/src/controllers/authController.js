import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    res.json({ success: false, message: "all fields are required" });

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser)
      res.json({ success: false, message: "user already registred" });
    // we used bcrypt to hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // generate jwt token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      // true in production
      secure: process.env.NODE_ENV === "production",
      //
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  // 1. validate inputs
  if (!email || !password) {
    res.json({ success: false, message: "all fields are required" });
  }

  try {
    const user = await userModel.findOne({ email });
    // 2. chack user exists
    if (!user) {
      res
        .status(404)
        .json({ succuss: false, message: "User is not registered" });
    }

    // 3. compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Password incorrecte",
      });
    }

    // 4. generate token
    const login_jwt = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // 5. send token in cookie
    res.cookie("token", login_jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    // 6. send the response without pwd
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (e) {
    console.log("error", e);
    res.status(500).json({ success: false, message: e });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ success: true, message: "Logged out" });
  } catch (err) {
    console.log("error", err);
    res.status(500).json({ success: false, message: e });
  }
};
