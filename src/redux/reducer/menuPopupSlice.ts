import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MenuItem, AddOnItem, AddOnItemDetail, MenuPopupState } from '@/types';



const initialState: MenuPopupState = {
  menuId: '',
  visible: false,
  categoryId: '',
  data: {},
  selectedItems: {},
  selectedItemsAmount: {},
  amount: 0,
  totalAmount: 0,
  quantity: 1,
};

export const menuPopupSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setPopup: (state, action: PayloadAction<MenuPopupState>) => {
      return { ...state, ...action.payload };
    },
    closePopup: (state) => {
      return initialState;
    },
    updateItemsSelection: (state, action: PayloadAction<Partial<MenuPopupState>>) => {
      return { ...state, ...action.payload };
    },
    updateSelectedItems: (
      state,
      action: PayloadAction<{ key: string; items: string[] }>,
    ) => {
      const { key, items } = action.payload;
      state.selectedItems[key] = items;
    },
    updateSelectedAmount: (
      state,
      action: PayloadAction<{ key: string; amount: number }>,
    ) => {
      const { key, amount } = action.payload;
      state.selectedItemsAmount[key] = amount;
    },
  },
});

export const {
  setPopup,
  closePopup,
  updateItemsSelection,
  updateSelectedItems,
  updateSelectedAmount,
} = menuPopupSlice.actions;

export default menuPopupSlice.reducer;
