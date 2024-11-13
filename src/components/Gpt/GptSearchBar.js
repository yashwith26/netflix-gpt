import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
import { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, GEMINI_AI_KEY } from "../../utils/constants";
import { addGptMovieResults } from "../../utils/gptSlice";

const GptSearchBar = () => {
  // console.log(GEMINI_AI_KEY);
  // console.log(API_OPTIONS.headers.Authorization);
  const genAI = new GoogleGenerativeAI(GEMINI_AI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const langKey = useSelector((store) => store.config.lang);

  const dispatch = useDispatch();

  const searchText = useRef(null);
  //search movie in TMDB
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

  const handleGeminiSearcgClick = async () => {
    const gptQuery =
      "Act as a movie recommendation syatem and suggest some movies for the query" +
      searchText.current.value +
      ". only gives me names of 5 movies, comma seperated like the example result given ahead. Example Results: Gadar, Don, Sholay, 3 Idiots, Golmaal";
    const prompt = gptQuery;
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    const gptMovies = result.response.text().split(",");
    console.log(gptMovies);

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[40%]   md:pt-[10%] flex justify-center">
      <form
        className=" w-full mx-4 md:w-1/2   bg-black grid grid-cols-12 bg-opacity-75 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-3 m-4 col-span-9 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-5  bg-red-700 text-white rounded-lg md:px-0 px-1 "
          onClick={handleGeminiSearcgClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
