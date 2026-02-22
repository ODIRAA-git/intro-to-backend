import { User } from "../models/user.model.js";

const createUser = async (req, res) => { // Define an asynchronous function to handle user creation
    try {
        const { username, email, password } = req.body; // Extract user details from the request body
   // Check if any required fields are missing
        if (!username || !email || !password) { 
            return res.status(400).json({ message: "All fields are required" }); // Send a 400 response if validation fails
        }
        // Check if a user with the same email already exists
        const existingUser = await User.findOne({ email: email.toLowerCase().trim() });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" }); // Send a 400 response if the email is already registered
        }
        // Create a new user instance with the provided details
        const newUser = await User.create({
            username: username.toLowerCase().trim(),
            email: email.toLowerCase().trim(),
            password: password, 
            loggedIn: false,
        });
        await newUser.save(); // Save the new user to the database
        res.status(201).json({ 
            message: "User created successfully", 
            userId: newUser._id,
            email: newUser.email,
            username
        
        }); // Send a 201 response with the new user's ID
    } catch (error) {
        console.log(`Error creating user: ${error.message}`); // Log any errors that occur during user creation
        res.status(500).json({ message: "Server error" }); // Send a 500 response if an error occurs
    }
};

const loginUser = async (req, res) => { // Define an asynchronous function to handle user login
    try {
        if (!req.body) {
            return res.status(400).json({ message: "Request body is missing" });
        }
        const { email, password } = req.body; // checking if user already exists in the database
        console.log("Login attempt:", { email });
        // Check if required fields are missing
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        // Find user by email
        const user = await User.findOne({ 
            email: email.toLowerCase().trim() 
        });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        // Compare passwords (hashed)
        const canCompare = typeof user.comparePassword === "function";
        const isMatch = canCompare ? await user.comparePassword(password) : false; // Use the comparePassword method to check if the provided password matches the stored hashed password
        if (!isMatch) {
            // Legacy fallback: user was created before hashing
            if (user.password === password) {
                user.password = password; // re-hash on save
                await user.save();
            } else {
                return res.status(401).json({ message: "Invalid email or password" }); // Send a 401 response if the password is incorrect
            }
        }
        res.status(200).json({
            message: "Login successful",
            userId: user._id,
            email: user.email,
            username: user.username
        });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ message: "Server error", detail: error?.message });
    }
};
const logoutUser = async (req, res) => {
    try {
        const { email } = req.body; // Extract the email from the request body
        if (!email) {
            return res.status(400).json({ message: "Email is required" }); // Send a 400 response if the email is missing
        }
        const user = await User.findOne({ email: email.toLowerCase().trim() }); // Find the user by email
        if (!user) {                                                                                                        
            return res.status(404).json({ message: "User not found" }); // Send a 404 response if the user is not found         
        }                       
        user.loggedIn = false; // Set the user's loggedIn status to false
        await user.save(); // Save the updated user document
        res.status(200).json({ message: "Logout successful" }); // Send a 200 response indicating successful logout
    } catch (error) {
        console.error("Error logging out user:", error);
        res.status(500).json({ message: "Server error", detail: error?.message }); // Send a 500 response if an error occurs
    }
};  
export { createUser, loginUser, logoutUser }; // Export the createUser, loginUser, and logoutUser functions to be used in route handlers