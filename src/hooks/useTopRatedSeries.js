import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedSeries } from "../utils/seriesSlice";

const useTopRatedSeries = () => {
  const topRatedSeries = useSelector((store) => store.series.topRatedSeries);

  const dispatch = useDispatch();

  const getTopRatedSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedSeries(json.results));
  };
  useEffect(() => {
    !topRatedSeries && getTopRatedSeries();
  }, []);
};

export default useTopRatedSeries;
