import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingList: null,
    TrailerVideo: null,
  },
  reducers: {
    addNowPlayingList: (state, action) => {
      state.nowPlayingList = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.TrailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingList, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
