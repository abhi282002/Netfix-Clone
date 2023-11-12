import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  return (
    movies.nowPlayingList && (
      <div className="flex flex-col bg-black">
        <div className="lg:-mt-80 -mt-7 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingList} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"TopRated"} movies={movies.TopRatedMovies} />
          <MovieList title={"UpComing Movies"} movies={movies.UpcomingMovies} />
        </div>
        {/**
         * MovieList - Populer
         *   - Multiple Cards in One Movie List
         *
         * MovieList - Now Playing
         * - Multiple Cards in One Movie List
         * MovieList - Trending
         * - Multiple Cards in One Movie List
         * MovieList - Error
         *
         */}
      </div>
    )
  );
};

export default SecondaryContainer;
