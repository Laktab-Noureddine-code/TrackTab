import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
  },
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
      // console.log(state.cards)
    },
  },
});

export const { setCards } = cardsSlice.actions;
export default cardsSlice.reducer;
