import React from 'react';
import Iframe from 'react-iframe';
import './style.css';

const MainVideo = props => {
  const video = props.video;

  if (!video) {
    return <div className="main-vid">Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  const videoPlayed = e => {
    const player = e.target;
    console.log('start play:', player);
  };

  return (
    <div className="main-vid">
      <Iframe
        onPlay={videoPlayed}
        url={url}
        width="600px"
        height="350px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      />
      <div className="details">
        <div className="text-datails">{video.snippet.title}</div>
        <div className="text-datails">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default MainVideo;
