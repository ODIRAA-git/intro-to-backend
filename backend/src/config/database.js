import mongoose from "mongoose";

const connectDB = async (uri) => {
  try {
    const connectionInstance = await mongoose.connect(uri);
    console.log(
      `MongoDB connected: ${connectionInstance.connection.host}`
    ); // Log the host of the connected MongoDB instance
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit the process with a failure code
  }
};

export default connectDB;