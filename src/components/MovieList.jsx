import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  return (
    <div className="mt-4 text-white  overflow-y-hidden h-[340px]">
      <h1 className="pl-10 font-bold text-2xl">{title}</h1>
      <div className="flex pt-1  rounded-md overflow-x-auto">
        <div className="flex flex-nowrap  pl-10 gap-x-2 py-2">
          {movies?.map((movie) => {
            return (
              <MovieCards key={movie.id} poster_path={movie?.poster_path} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
