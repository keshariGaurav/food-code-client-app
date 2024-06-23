import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { AddOnItem, AddOnItemDetail, MenuItem, MenuPopupState } from '@/types';

type CartState = {
  items: { [key: string]: MenuPopupState };
};

const initialState: CartState = {
  items: {},
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
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
    deleteItem: (state, action: PayloadAction<{ cartId: string }>) => {
      const {
        payload: { cartId },
      } = action;
      delete state.items[cartId];
    },
  },
});
export const { addNewItem, updateItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
