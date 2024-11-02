import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const series = useSelector((store) => store.series);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-52 pl-12 relative z-20 ">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList title={"Airing Today"} movies={series.airingTodaySeries} />
          <MovieList title={"On the Air "} movies={series.ontheAirSeries} />
          <MovieList title={"Popular Series "} movies={series.popularSeries} />
          <MovieList
            title={"Top Rated Series "}
            movies={series.topRatedSeries}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
