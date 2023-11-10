import React from "react";
import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
const Browse = () => {
  useNowPlayingMovie();

  return (
    <div className="w-screen">
      <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
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
