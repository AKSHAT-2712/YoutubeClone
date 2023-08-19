import React, { useEffect, useState } from "react";
import {
  YOUTUBE_POPULAR_VIDEOS_API,
  YOUTUBE_MULTIPLE_VIDEOS_API,
} from "../utils/constants";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []); //empty array for making an api call once

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };
  return videos.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}><VideoCard key={video.id} info={video} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
