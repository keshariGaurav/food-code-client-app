import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { AddOnItem, AddOnItemDetail, MenuItem, MenuPopupState } from '@/types';

type CartState = {
  cookingRequest: string;
  items: { [key: string]: MenuPopupState };
};

const initialState: CartState = {
  items: {},
  cookingRequest: '',
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCookingRequest: (state, action: PayloadAction<{ request: string }>) => {
      const {
        payload: { request },
      } = action;
      state.cookingRequest = request;
    },
    addNewItem: (
      state,
      action: PayloadAction<{ cartId: string; item: MenuPopupState }>,
    ) => {
      const {
        payload: { cartId, item },
      } = action;
      state.items[cartId] = item;
    },
    updateItem: (
      state,
      action: PayloadAction<{ cartId: string; item: MenuPopupState }>,
    ) => {
      const {
        payload: { cartId, item },
      } = action;
      state.items[cartId] = item;
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ cartId: string; quantity: number }>,
    ) => {
      const {
        payload: { cartId, quantity },
      } = action;
      state.items[cartId]['quantity'] = quantity;
      state.items[cartId]['totalAmount'] = state.items[cartId].amount * quantity;
    },
    deleteItem: (state, action: PayloadAction<{ cartId: string }>) => {
      const {
        payload: { cartId },
      } = action;
      delete state.items[cartId];
    },
  },
});
export const { addNewItem, updateItem, deleteItem, updateQuantity, addCookingRequest } =
  cartSlice.actions;
export default cartSlice.reducer;
