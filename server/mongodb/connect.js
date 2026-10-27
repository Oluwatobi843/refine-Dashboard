// import mongoose from 'mongoose';

// const connectDB = (url) => {
//   mongoose.set('strictQuery', true);
//   mongoose.connect(url)
//     .then(() => console.log('Connected to MongoDB'))
//     .catch((err) => {
//       console.error('Failed to connect with MongoDB');
//       console.error(err);
//     });
// };

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
   