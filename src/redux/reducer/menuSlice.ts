import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

type MenuState = {
  id: string | any;
  price: number | undefined;
};

type initialStateType = {
  menuList: MenuState[];
};
const menuList: MenuState[] = [];
const initialState: initialStateType = {
  menuList,
};
export const menuSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addNewItem: (state, action: PayloadAction<MenuState>) => {
      state.menuList?.push(action.payload);
    },
    updateItem: (state, action: PayloadAction<MenuState>) => {
      const {
        payload: { id, price },
      } = action;

      state.menuList = state.menuList.map((menu) =>
        menu.id === id ? { ...menu, price } : menu,
      );
      localStorage.setItem('userData', JSON.stringify(state.menuList));
    },
    deleteItem: (state, action: PayloadAction<{ id: string }>) => {
      const newArr = state.menuList.filter((menu) => menu.id !== action.payload);
      localStorage.setItem('userData', JSON.stringify(newArr));
      state.menuList = newArr;
    },
  },
});
export const { addNewItem, updateItem, deleteItem } = menuSlice.actions;
export const selectmenuList = (state: RootState) => state.menu.menuList;
export default menuSlice.reducer;
