import jwd from "jsonwebtoken";

export const protect = async (req, res, next) => {
  try {
    const token = res.cookies?.token;
    if (!token) {
      res.status(401).json({ success: false, message: "Token not found" });
    }

    const decoded = jwd.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id };
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Not authorized" });
  }
};
