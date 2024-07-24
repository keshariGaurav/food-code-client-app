import { configureStore } from '@reduxjs/toolkit';

import { alertSlice } from '@/redux/reducer/alertSlice';
import { cartSlice } from '@/redux/reducer/cartSlice';
import { dinerSlice } from '@/redux/reducer/dinerSlice';
import { menuPopupSlice } from '@/redux/reducer/menuPopupSlice';
import { menuSlice } from '@/redux/reducer/menuSlice';
import {apiSlice} from '@/redux/reducer/apiSlice';

export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    diner: dinerSlice.reducer,
    alert: alertSlice.reducer,
    menuPopup: menuPopupSlice.reducer,
    cart: cartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Uses Guide
/*

import { addNewItem, updateItem,deleteItem } from "../redux/reducer/menuSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const dispatch = useAppDispatch();
dispatch(updateItem({ price:45, id: 'x' }));

https://theonetechnologies.com/blog/post/how-to-add-redux-toolkit-to-your-react-typescript-app

*/
