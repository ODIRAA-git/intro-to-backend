import express from "express";
import cors from "cors";
import userRouter from "./routes/user.route.js"; // Import the user router
import postRouter from "./routes/post.route.js"; // Import the post router	


const app = express(); // Create an instance of the Express application
//Declare routes
app.use(cors()); // Allow all origins in dev
app.use(express.json()); // Middleware to parse JSON request bodies
app.use((req, res, next) => {
	console.log(`${req.method} ${req.originalUrl}`);
	next();
});
app.use("/api/v1/users", userRouter); // Use the user router for routes starting with /api/v1/users
app.use("/api/v1/posts", postRouter); // Use the post router for routes starting with /api/v1/posts

// Global error handler
app.use((err, req, res, next) => {
	console.error("Server error:", err);
	res.status(500).json({ message: "Server error", detail: err?.message });
});

export default app