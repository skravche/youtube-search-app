import React from 'react';
import Iframe from 'react-iframe';

const MainVideo = props => {
  const video = props.video;

  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  const videoPlayed = e => {
    const player = e.target;
    console.log('start play:', player);
  };

  return (
    <div className="col-md-8">
      <Iframe
        onPlay={videoPlayed} // defaults -> noop
        url={url}
        width="600px"
        height="350px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      />
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default MainVideo;
