import express from "express";
import cors from "cors";
import userRouter from "./routes/user.route.js"; // Import the user router

const app = express(); // Create an instance of the Express application
//Declare routes
app.use(cors({ origin: ["http://localhost:5173", "http://localhost:5176"] })); // Allow requests from Vite dev server(s)
app.use(express.json()); // Middleware to parse JSON request bodies
app.use((req, res, next) => {
	console.log(`${req.method} ${req.originalUrl}`);
	next();
});
app.use("/api/v1/users", userRouter); // Use the user router for routes starting with /api/v1/users

export default app