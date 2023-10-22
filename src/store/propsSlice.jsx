import { createSlice } from "@reduxjs/toolkit";

const propsSlice = createSlice({
  name: "props",
  initialState: {
    radioMenuA: "radio-1",
    activeItemA: null,
  },
  reducers: {
    radioMenuChange: (state, action) => {
      state.radioMenuA = action.payload;
    },
    activeItemChange: (state, action) => {
      state.activeItemA = action.payload;
    },
  },
});

export const { radioMenuChange, activeItemChange } = propsSlice.actions;

export default propsSlice.reducer;
