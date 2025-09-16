import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
  },
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    addCard: (state, action) => {
      state.cards = [...state.cards, action.payload];
    },
  },
});

export const { setCards,addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
