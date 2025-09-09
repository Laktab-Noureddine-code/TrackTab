import jwd from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({ success: false, message: "Token not found" });
    }
    const decoded = jwd.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id };
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: error });
  }
};
export default authMiddleware;
