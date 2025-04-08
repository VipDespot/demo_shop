import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/api/Api.Products";
import { BasketState } from "../../types/api/BasketTypes";

const initialState: BasketState = {
  items: [],
  total: 0,
};

const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBascet: (state, action: PayloadAction<Product>) => {
      const thisProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (thisProduct) {
        thisProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeToBasket: (state, action: PayloadAction<number | string>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        if (state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
        } else {
          state.items.splice(index, 1);
        }
      }
    },
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

export const { addToBascet, removeToBasket, clearBasket } = BasketSlice.actions;
export default BasketSlice.reducer;
