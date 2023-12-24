import React from "react";

function Shimmer() {
  return (
    <div className="flex gap-4 flex-wrap">
      {Array(10)
        .fill(",")
        .map((index) => {
          return (
            <div
              className="w-[360px] h-[348px] bg-black/20"
              key={index + Math.random()}
            ></div>
          );
        })}
    </div>
  );
}

export default Shimmer;
