import { categoryModel } from "../models/categoryModel.js";

const defaultCategories = [
  { name: "Food", type: "expense", icon: "Utensils" },
  { name: "Transport", type: "expense", icon: "Car" },
  { name: "Shopping", type: "expense", icon: "ShoppingBag" },
  { name: "Gym", type: "expense", icon: "Dumbbell" },
  { name: "Salary", type: "income", icon: "Wallet" },
  { name: "Freelance", type: "income", icon: "Laptop" },
];

async function categrySeeder(userId) {
  try {
    const count = await categoryModel.countDocuments({ userId });
    if (count > 0) {
      return;
    }
    const categoriesWithUser = defaultCategories.map((cat) => ({
      ...cat,
      userId,
    }));

    await categoryModel.insertMany(categoriesWithUser);
    console.log("Categories seeded successfully");
  } catch (err) {
    console.error("Error seeding categories:", err);
  }
}

export default categrySeeder;
