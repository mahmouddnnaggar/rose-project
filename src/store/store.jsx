import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counter/counter.slice.jsx";
import { userReducer } from "./features/user/user.slice.jsx";
import { cartReducer } from "./features/cart/cart.slice.jsx";
import { payAndOrderReducer } from "./features/payAndOrder/payAndOrder.slice.jsx";

export const ourStore = configureStore({
  reducer: {
    counterReducer,
    userReducer,
    cartReducer,
    payAndOrderReducer,
  },
});
