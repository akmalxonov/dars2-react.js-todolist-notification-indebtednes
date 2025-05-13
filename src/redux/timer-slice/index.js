import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    time: 0,
    running: false,
  },
  reducers: {
    start: (state) => {
      state.running = true;
    },
    stop: (state) => {
      state.running = false;
    },
    reset: (state) => {
      state.running = false;
      state.time = 0;
    },
    tick: (state) => {
      if (state.running) {
        state.time += 1;
      }
    },
  },
});

export const { start, stop, reset,tick } = timerSlice.actions;
export default timerSlice.reducer;
