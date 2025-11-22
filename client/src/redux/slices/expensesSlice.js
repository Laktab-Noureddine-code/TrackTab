import {expenses} from "@/data/data";
import { createSlice } from "@reduxjs/toolkit";

const ExpensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: expenses,
  },
  reducers: {
    addExpense(state, action) {
      state.expenses.push(action.payload);
    },
  },
});

export const { addExpense } = ExpensesSlice.actions;

export default ExpensesSlice.reducer;
