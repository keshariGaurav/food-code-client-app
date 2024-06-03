import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DinerState = {
  email: string;
  name: string | undefined;
};

const initialState: DinerState = {
  email: '',
  name: undefined,
};

export const dinerSlice = createSlice({
  name: 'diner',
  initialState,
  reducers: {
    setDiner: (state, action: PayloadAction<DinerState>) => {
      return { ...state, ...action.payload };
    },
    updateDinerEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updateDinerName: (state, action: PayloadAction<string | undefined>) => {
      state.name = action.payload;
    },
    clearDiner: (state) => {
      return initialState;
    },
  },
});

export const { setDiner, updateDinerEmail, updateDinerName, clearDiner } =
  dinerSlice.actions;

export default dinerSlice.reducer;
