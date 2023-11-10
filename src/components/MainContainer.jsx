import React from "react";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingList);
  if (!movies) return;
  console.log(movies[0]);
  const { title, overview, id } = movies[0];
  return (
    <div className="relative">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground MovieId={id} />
    </div>
  );
};

export default MainContainer;
