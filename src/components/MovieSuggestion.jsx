import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const MovieSuggestion = () => {
  const { gptSearchResult, tmdbSearchResult } = useSelector(
    (store) => store.gpt
  );
  if (!gptSearchResult || !tmdbSearchResult) return null;

  return (
    <>
      <div className="flex flex-col w-screen ">
        {gptSearchResult.map((movieName, index) => {
          return (
            <MovieList
              key={movieName}
              title={movieName}
              movies={tmdbSearchResult[index]}
            />
          );
        })}
      </div>
    </>
  );
};

export default MovieSuggestion;
