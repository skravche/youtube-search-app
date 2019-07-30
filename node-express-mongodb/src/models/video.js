import mongoose from 'mongoose';

const Video = mongoose.model(
  'Video',
  new mongoose.Schema({
    id: String,
    title: String,
    description: String,
  }),
);

export default Video;
