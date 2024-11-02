import useAiringTodaySeries from "../hooks/useAiringTodaySeries";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useOnTheAirSeries from "../hooks/useOnTheAirSeries";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularSeries from "../hooks/usePopularSeries";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTopRatedSeries from "../hooks/useTopRatedSeries";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import { MainContainer } from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useAiringTodaySeries();
  useOnTheAirSeries();
  usePopularSeries();
  useTopRatedSeries();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
