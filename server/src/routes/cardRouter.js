import express from "express";
// import authMiddleware from "../middlewares/authMiddleware";
import { addCard, deleteCard, getCards, updateCard } from "../controllers/cardController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const cardRouter = express.Router();

cardRouter.post("/add", authMiddleware, addCard);
cardRouter.put("/:id/update", authMiddleware, updateCard);
cardRouter.delete("/:id/delete", authMiddleware, deleteCard);
cardRouter.get("/all", authMiddleware, getCards);

export default cardRouter;
