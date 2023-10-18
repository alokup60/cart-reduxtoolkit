import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import cartData from "../CardData";
import axios from "axios";

const BASE_URL = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk("carts/getCartItems", async () => {
  const response = await axios.get(BASE_URL);
  console.log(response.data);
  return response?.data;
});

const initialState = {
  cartItems: [],
  amount: 1,
  total: 0,
  isLoading: true,
};
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
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { clearCart, removeItems, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
