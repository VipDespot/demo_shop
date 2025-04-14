import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  productsPerPage: 12,
};

const limitedSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setProductsPerPage: (state, action: PayloadAction<number>) => {
      state.productsPerPage = action.payload;
    },
  },
});

export const { setProductsPerPage } = limitedSlice.actions;
export default limitedSlice.reducer;
