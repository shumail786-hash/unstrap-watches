import { configureStore } from "@reduxjs/toolkit";
import cartToggle from "./features/cartToggleSlice";

export const store = configureStore({
  reducer: {
    cartToggle,
  },
});
