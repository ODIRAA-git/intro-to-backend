import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/database.js";

// Load environment variables
dotenv.config({ path: "./backend/.env" });

// Start server after DB connects
const startServer = async () => {
  try {
    // Connect to MongoDB using the URI from .env
    await connectDB(process.env.MONGODB_URI);
    const port = process.env.PORT || 5000;
    // Start the server on the specified port or default to 5000
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (error) {
    // Log startup errors and exit
    console.log(`Error starting the server: ${error.message}`);
    process.exit(1);
  }
};

// Initialize the server
startServer();
