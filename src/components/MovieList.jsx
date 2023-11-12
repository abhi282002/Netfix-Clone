import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  return (
    <div className=" text-white py-4 overflow-y-hidden h-[360px]">
      <h1 className="pl-10 font-bold text-2xl">{title}</h1>
      <div className="flex pt-1 overflow-x-scroll rounded-md">
        <div className="flex pl-10 gap-x-2 py-2">
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
