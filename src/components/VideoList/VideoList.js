import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onUserSelected={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <div className="rigth-colll col-md-8">
      <ul className="col-md-8 list-group">{videoItems}</ul>
    </div>
  );
};

export default VideoList;
