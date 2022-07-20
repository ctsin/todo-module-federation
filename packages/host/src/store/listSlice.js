import { createSlice } from "@reduxjs/toolkit";

const initialState = { list: [] };

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    add(state, action) {
      state.list.unshift(action.payload);
    },
    remove(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = listSlice.actions;

export default listSlice.reducer;
