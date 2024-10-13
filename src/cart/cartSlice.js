import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.count = action.payload.count; // Update count if item already exists
      } else {
        state.push({ ...action.payload, count: action.payload.count }); // Add new item
      }
    },
    removeItem: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id); // Remove item by id
    },
    updateItemCount: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.count = action.payload.count; // Update item count
      }
    },
    clearCart: (state) => {
      state = []; // Clear all items from the cart
    },
  },
});
export const { addItem, removeItem, updateItemCount, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
