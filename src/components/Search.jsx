import React from "react";
import SearchBar from "./SearchBar";
import MovieSuggestion from "./MovieSuggestion";

const Search = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center pt-80">
      <div className="absolute w-full  top-0 left-0  h-full">
        <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Logo"
        />
      </div>
      <div className="absolute top-0 left-0 h-full flex flex-col items-center justify-center">
        <SearchBar />
      </div>

      <MovieSuggestion />
    </div>
  );
};

export default Search;
