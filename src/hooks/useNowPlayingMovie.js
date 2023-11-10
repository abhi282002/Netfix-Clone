import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addNowPlayingList } from "../utils/movieSlice";
const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  const getMoviePlaylist = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingList(json.results));
    console.log(json.results);
  };
  useEffect(() => {
    getMoviePlaylist();
  }, []);
};

export default useNowPlayingMovie;
