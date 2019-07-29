export const getVideos = fetch('http://localhost:3333/contacts');

// add to server
export const addVideo = data =>
  fetch('http://localhost:3333/contacts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
