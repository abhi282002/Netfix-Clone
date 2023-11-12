import React from "react";
import SearchBar from "./SearchBar";
import MovieSuggestion from "./MovieSuggestion";
import { BG_URL } from "../utils/constant";
const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img className="sm:h-screen lg:w-screen" src={BG_URL} alt="Logo" />
      </div>
      <SearchBar />
      <MovieSuggestion />
    </div>
  );
};

export default GptSearch;
