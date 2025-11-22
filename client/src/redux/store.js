import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./slices/expensesSlice";
import incomesReducer from "./slices/incomesSlice";
import authReducer from "./slices/authSlice";
import cardsReducer from "./slices/cardsSlice";

const myStore = configureStore({
  reducer: {
    expenses: expensesReducer,
    incomes: incomesReducer,
    auth: authReducer,
    cards: cardsReducer,
  },
});

export default myStore;
