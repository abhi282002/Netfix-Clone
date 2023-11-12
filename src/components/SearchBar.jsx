import React from "react";

const SearchBar = () => {
  return (
    <div className="pt-28 flex justify-center">
      <div className=" px-2 lg:w-[750px] w-[700px] h-[80px]  grid grid-cols-12">
        <input
          className="my-3 bg-white outline-none rounded-md pl-4  font-semibold text-lg  placeholder:font-bold placeholder:text_color placeholder:pl-4 border border-black col-span-9"
          type="text"
          placeholder="What Would You Like to Watch Today"
        />
        <button className="ml-1 text-white text-xl font-semibold bg-yellow  rounded-lg my-3 col-span-3">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
