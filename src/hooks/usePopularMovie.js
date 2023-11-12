import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMoviePlaylist = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMoviePlaylist();
  }, []);
};

export default usePopularMovies;
