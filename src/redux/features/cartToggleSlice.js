import { createSlice } from "@reduxjs/toolkit";

const cartToggleSlice = createSlice({
  name: "cart-toggle",
  initialState: {
    toggle: false,
  },
  reducers: {
    toggleTrigger: (state, action) => {
      state.toggle = action.payload;
    },
  },
});

export const { toggleTrigger } = cartToggleSlice.actions;

export default cartToggleSlice.reducer;
