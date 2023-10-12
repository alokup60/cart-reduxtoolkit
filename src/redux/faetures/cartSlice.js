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
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});
// console.log(cartSlice);

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
