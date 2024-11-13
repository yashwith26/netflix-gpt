import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36  md:w-48 pr-6 md:duration-300 md:hover:scale-90">
      <img
        className="rounded-2xl"
        alt="movie card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
