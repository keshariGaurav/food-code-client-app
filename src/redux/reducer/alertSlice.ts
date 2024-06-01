import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AlertState = {
  type: string;
  visible: boolean;
  message: string | undefined;
};

const initialState: AlertState = {
  type: '',
  visible: false,
  message: '',
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<AlertState>) => {
      return { ...state, ...action.payload };
    },
    clearAlert: (state) => {
      return initialState;
    },
  },
});

export const { setAlert, clearAlert } = alertSlice.actions;

export default alertSlice.reducer;
