import { categoryModel } from "../models/categoryModel.js";

const defaultCategories = [
  { name: "Food", type: "expense", icon: "Utensils" },
  { name: "Transport", type: "expense", icon: "Car" },
  { name: "Shopping", type: "expense", icon: "ShoppingBag" },
  { name: "Gym", type: "expense", icon: "Dumbbell" },
  { name: "Salary", type: "income", icon: "Wallet" },
  { name: "Freelance", type: "income", icon: "Laptop" },
];

async function categrySeeder() {
  try {
    const count = await Category.countDocuments();
    if (count > 0) {
      return;
    }
    await categoryModel.insertMany(defaultCategories);
    console.log("Categories seeded successfully");
  } catch (err) {
    console.error("Error seeding categories:", err);
  }
}

export default categrySeeder;
