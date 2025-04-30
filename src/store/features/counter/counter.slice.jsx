import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increase: function (prev) {
      if (prev.counter < 20) prev.counter += 1;
    },
    decrease: function (prev) {
      if (prev.counter > 0) prev.counter -= 1;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const counterActions = counterSlice.actions;
