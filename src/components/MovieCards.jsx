import React from "react";
import { IMAGE_CDN_URL } from "../utils/constant";

const MovieCards = ({ poster_path }) => {
  return (
    <div className="w-[200px] text-white">
      <img
        className="w-[200px] rounded-sm"
        alt="Movie Cards"
        src={IMAGE_CDN_URL + poster_path}
      />
    </div>
  );
};

export default MovieCards;
