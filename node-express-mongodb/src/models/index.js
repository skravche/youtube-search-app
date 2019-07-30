import mongoose from 'mongoose';
import Video from './video';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { Video };

export { connectDb };

export default models;
