import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addAiringToday } from "../utils/seriesSlice";

const useAiringTodaySeries = () => {
  const airingTodaySeries = useSelector(
    (store) => store.series.airingTodaySeries
  );
  const dispatch = useDispatch();

  const getAiringTodaySeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addAiringToday(json.results));
  };
  useEffect(() => {
    !airingTodaySeries && getAiringTodaySeries();
  }, []);
};

export default useAiringTodaySeries;
