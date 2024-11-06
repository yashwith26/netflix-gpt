import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addOnTheAirSeries } from "../utils/seriesSlice";

const useOnTheAirSeries = () => {
  const onTheAirSeries = useSelector((store) => store.series.ontheAirSeries);
  const dispatch = useDispatch();

  const getOnTheAirSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addOnTheAirSeries(json.results));
  };
  useEffect(() => {
    !onTheAirSeries && getOnTheAirSeries();
  }, []);
};

export default useOnTheAirSeries;
