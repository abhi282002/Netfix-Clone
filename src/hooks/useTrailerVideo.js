import { useEffect } from "react";

import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
const useTrailerVideo = (MovieId) => {
  const dispatch = useDispatch();
  const getTrailerVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${MovieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailerData = json?.results?.filter((video) => {
      return video.type === "Trailer";
    });

    const trailer = trailerData.length ? trailerData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getTrailerVideo();
  }, []);
};

export default useTrailerVideo;
