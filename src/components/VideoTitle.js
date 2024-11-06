import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="py-2 md:py-0 text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className="bg-white my-1  md:my-0 px-3 py-1 md:px-6 md:py-2 text-lg text-black  rounded-md hover:bg-opacity-70">
          <i
            className="fa-solid fa-play fa-lg "
            style={{ color: "#000000" }}
          ></i>
          {"  "} Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 px-6 py-2 text-lg mx-2 text-white  rounded-md hover:bg-opacity-70">
          <i
            className="fa-solid fa-info fa-lg"
            style={{ color: "#ffffff" }}
          ></i>
          {"  "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
