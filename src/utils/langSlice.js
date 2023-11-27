import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: {
    language: "en",
  },
  reducers: {
    addLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { addLanguage } = langSlice.actions;
export default langSlice.reducer;
