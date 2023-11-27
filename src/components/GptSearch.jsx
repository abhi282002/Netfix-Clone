import React from "react";
import SearchBar from "./SearchBar";
import MovieSuggestion from "./MovieSuggestion";
import { BG_URL } from "../utils/constant";
const GptSearch = () => {
  return (
    <div className="w-screen h-full">
      <div className="h-[2000px] w-screen border border-bermuda -z-20 absolute">
        <img className=" h-full lg:w-screen" src={BG_URL} alt="Logo" />
      </div>
      <div className="absolute">
        <SearchBar />
        <MovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
