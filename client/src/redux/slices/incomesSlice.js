import { incomes } from "@/data/data";
import { createSlice } from "@reduxjs/toolkit";

const IncomesSlice = createSlice({
  name: "incomes",
  initialState: {
    incomes: incomes,
  },
  reducers: {
    addIncome(state, action) {
      state.incomes.push(action.payload);
    },
  },
});

export const { addIncome } = IncomesSlice.actions;

export default IncomesSlice.reducer;
