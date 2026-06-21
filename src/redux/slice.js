import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearAllItem: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearAllItem } = addToCart.actions;

export default addToCart.reducer;
