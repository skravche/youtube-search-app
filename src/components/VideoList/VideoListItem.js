import React from 'react';

const VideoListItem = props => {
  const video = props.video;
  const onUserSelected = props.onUserSelected;
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onUserSelected(video)} className="list-group-item">
      <div className="media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} alt=" " />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
