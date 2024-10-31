import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-white px-6 py-2 text-lg text-black  rounded-md hover:bg-opacity-70">
          <i class="fa-solid fa-play fa-lg " style={{ color: "#000000" }}></i>
          {"  "} Play
        </button>
        <button className="bg-gray-500 px-6 py-2 text-lg mx-2 text-white  rounded-md hover:bg-opacity-70">
          <i class="fa-solid fa-info fa-lg" style={{ color: "#ffffff" }}></i>
          {"  "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
