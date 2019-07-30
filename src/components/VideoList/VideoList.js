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
    <div className="">
      <ul className="list-group">{videoItems}</ul>
    </div>
  );
};

export default VideoList;
