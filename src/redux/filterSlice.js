import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filterValue',
  initialState: '',
  reducers: {
    change: (state, action) => {
      return action.payload;
    },
  },
});

export const { change } = filterSlice.actions;
