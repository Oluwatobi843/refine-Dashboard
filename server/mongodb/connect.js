
// export default connectDB;
import mongoose from 'mongoose';

const connectDB = async (url) => {
  if (!url) {
    throw new Error('MONGODB_URL is missing from the .env file');
  }
  mongoose.set('strictQuery', true);
  await mongoose.connect(url);
  console.log('Connected to MongoDB');
};

export default connectDB;  
   