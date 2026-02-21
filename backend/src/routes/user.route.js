import { Router } from "express"; // Import the Router class from Express
import { createUser, loginUser } from "../controllers/user.controller.js"; // Import the controller functions

const router = Router(); // Create a new router instance
router.post("/register", createUser); // Define a POST route for creating a new user
router.post("/login", loginUser); // Define a POST route for logging in a user







export default router; // Export the router to be used in other parts of the application