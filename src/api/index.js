export const getVideos = fetch('http://localhost:3333/video');

export const addVideo = data =>
  fetch('http://localhost:3333/video', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const delVideo = videoid =>
  fetch('http://localhost:3333/videoid', {
    method: 'POST',
    body: JSON.stringify(videoid),
  });
