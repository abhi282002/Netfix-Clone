import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchResult: null,
    tmdbSearchResult: null,
  },
  reducers: {
    addGptSearchResult: (state, action) => {
      const { gptSearchResult, tmdbSearchResult } = action.payload;
      state.gptSearchResult = gptSearchResult;
      state.tmdbSearchResult = tmdbSearchResult;
    },
  },
});

export const { addGptSearchResult } = gptSlice.actions;
export default gptSlice.reducer;
