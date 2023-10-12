import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../faetures/cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
