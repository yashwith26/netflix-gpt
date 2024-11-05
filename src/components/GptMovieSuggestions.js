import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  console.log(movieNames[0]);
  console.log(movieResults[0]);
  return (
    <div className="p-4 m-4 bg-black text-zinc-50 bg-opacity-80 rounded-lg">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieNames[index]}
            movies={movieResults[index]}
          ></MovieList>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
