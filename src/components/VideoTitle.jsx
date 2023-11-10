import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[12%] lg:pt-[14%] lg:pl-24 pl-8 absolute text-white ">
      <h1 className="font-bold text-3xl pb-6 bg-opacity-95">{title}</h1>
      <p className="w-1/2 lg:w-1/4 font-serif  bg-opacity-95">{overview}</p>
      <div className="flex gap-2 mt-6 bg-opacity-95">
        <button className="bg-white/100 bg-opacity-100 text-black  px-8 rounded-md   h-[40px]">
          ▶️ Play
        </button>
        <button className="bg-gray-700 text-white px-8 rounded-md opacity-50  h-[40px]">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
