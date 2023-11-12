import React from "react";
import SearchBar from "./SearchBar";
import MovieSuggestion from "./MovieSuggestion";

const Search = () => {
  return (
    <div className="absolute pt-80">
      <div className="absolute">
        <img
          className="sm:h-screen lg:w-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Logo"
        />
      </div>
      <SearchBar />
      <MovieSuggestion />
    </div>
  );
};

export default Search;
