import dotenv from "dotenv";
import connectDB from "./database.js";

//starting the server
dotenv.config({ path: "./.env" });

const startserver = async () => {
    try { 
        await connectDB(process.env.MONGODB_URI); // Connect to the database using the URI from environment variables
        app.on("error", (error) => {
            console.log(`Error starting the server: ${error.message}`);
            throw error; // Rethrow the error to be caught by the outer catch block
        });
        app.listen(process.env.PORT || 5000, () => { // Start the server on the specified port or default to 5000
            console.log(`Server is running on port: ${process.env.PORT}`);

        });

    } catch (error) {
        console.log(`Error starting the server: ${error.message}`);
    }
}
startserver();