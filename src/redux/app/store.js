import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../faetures/cartSlice";
import modalReducer from "../faetures/modalSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
