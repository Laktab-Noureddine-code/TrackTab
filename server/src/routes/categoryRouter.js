import express from "express";
import { addCategory, deleteCategory, getCategories, updateCatagory } from "../controllers/categoryController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const categoryRouter = express.Router();
categoryRouter.post("/add",authMiddleware, addCategory);
categoryRouter.get("/all",authMiddleware, getCategories);
categoryRouter.put("/:id/update",authMiddleware, updateCatagory);
categoryRouter.delete("/:id/delete",authMiddleware, deleteCategory);


export default categoryRouter;