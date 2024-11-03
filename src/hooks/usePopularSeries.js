import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularSeries } from "../utils/seriesSlice";

const usePopularSeries = () => {
  //To randomly shuffle series cards
  function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const dispatch = useDispatch();

  const getPopularSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    const shuffledSeries = shuffleArray(json.results);
    dispatch(addPopularSeries(shuffledSeries));
  };
  useEffect(() => {
    getPopularSeries();
  }, []);
};

export default usePopularSeries;
