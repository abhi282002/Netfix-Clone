import React, { useRef } from "react";
import openai from "../utils/openai";
import { useDispatch, useSelector } from "react-redux";
import { addGptSearchResult } from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constant";
import lang from "../utils/languageConstant";
const SearchBar = () => {
  const searchText = useRef("");
  const dispatch = useDispatch();
  const language = useSelector((store) => store.lang.language);
  if (!language) return null;

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };
  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptSearchResult = gptResult.choices[0].message.content.split(",");
    const tmdbPromiseResult = gptSearchResult.map((movie) => {
      return searchMovieTMDB(movie);
    });

    const tmdbSearchResult = await Promise.all(tmdbPromiseResult);
    dispatch(
      addGptSearchResult({
        gptSearchResult: gptSearchResult,
        tmdbSearchResult: tmdbSearchResult,
      })
    );
  };
  return (
    <div className="pt-28  w-screen h-full flex justify-center items-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" px-2 w-full   gap-2 flex justify-center "
      >
        <input
          ref={searchText}
          className="w-[600px] h-[60px] my-3 bg-white outline-none rounded-md pl-4  font-semibold text-lg  placeholder:font-bold placeholder:text_color placeholder:pl-4 border border-black col-span-9"
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearch}
          className="ml-1 text-white h-[58px] text-xl font-semibold col-span-3 bg-yellow  px-6 rounded-lg my-3"
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
