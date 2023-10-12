import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import cartData from "../CardData";

const initialState = {
  cartItems: cartData,
  amount: 1,
  total: 0,
  isLoading: true,
};
// console.log(initialState);
// console.log(initialState);
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItems: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    //toggle possible
    increase: (state, action) => {
      const incId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === incId);
      cartItem.amount += 1;
    },
    //payload -> id different
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount -= 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.map((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});
// console.log(cartSlice);

export const { clearCart, removeItems, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
