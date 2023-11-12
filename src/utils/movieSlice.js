import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingList: null,
    TrailerMovies: null,
    popularMovies: null,
    TopRatedMovies: null,
    UpcomingMovies: null,
  },
  reducers: {
    addNowPlayingList: (state, action) => {
      state.nowPlayingList = action.payload;
    },
    addTrailerMovies: (state, action) => {
      state.TrailerMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingList,
  addTrailerMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
