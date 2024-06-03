import { configureStore } from '@reduxjs/toolkit';


import { alertSlice } from './reducer/alertSlice';
import { dinerSlice } from './reducer/dinerSlice';
import { menuSlice } from './reducer/menuSlice';

export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    diner: dinerSlice.reducer,
    alert: alertSlice.reducer,
  },
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
