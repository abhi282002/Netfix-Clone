import React from "react";
import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

import usePopularMovies from "../hooks/usePopularMovie";
import useTopRatedMovies from "../hooks/useTopRated";
import useUpComingMovies from "../hooks/useUpComingMOvies";
import { Outlet } from "react-router-dom";
const Browse = () => {
  useNowPlayingMovie();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div className="w-screen">
      <div>
        <Header />
        <Outlet />
        {/**
         * MainContainer
         *   -videobackground
         *   - videotitle
         * -Secondary Container
         *   - movieList * n
         *   - cards * n
         */}
      </div>
    </div>
  );
};

export default Browse;
