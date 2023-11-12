import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMoviePlaylist = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    getTopRatedMoviePlaylist();
  }, []);
};

export default useTopRatedMovies;
