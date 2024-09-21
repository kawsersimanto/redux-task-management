import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.push(payload);
    },
  },
});

export default taskSlice.reducer;
export const { addTask } = taskSlice.actions;
