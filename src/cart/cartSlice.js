import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      for (let index in state) {
        if (state[index].id === action.payload.id) return;
      }

      state.push({ ...action.payload, count: 1 });
    },

    deleteFromCart(state, action) {
      state = state.filter((product) => product.id !== action.payload);
    },

    updateCount: {
      prepare(id, newCount) {
        return {
          payload: {
            id,
            newCount,
          },
        };
      },
      reducer(state, action) {
        for (let index in state) {
          if (state[index].id === action.payload.id) {
            state[index].count = action.payload.newCount;
          }
        }
      },
    },
  },
});

export const { addToCart, updateCount, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
