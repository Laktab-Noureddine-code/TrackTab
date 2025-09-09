import express from "express";
// import authMiddleware from "../middlewares/authMiddleware";
import { addCard } from "../controllers/cardController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const cardRouter = express.Router();

cardRouter.post("/add",authMiddleware, addCard);

export default cardRouter;
