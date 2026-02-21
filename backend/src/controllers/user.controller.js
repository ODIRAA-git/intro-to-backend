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
        const { email, password } = req.body; // Extract login details from the request body
        // Check if required fields are missing
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        // Find user by email
        const user = await User.findOne({ email: email.toLowerCase().trim() });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        // Compare passwords (plain text for now)
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        res.status(200).json({
            message: "Login successful",
            userId: user._id,
            email: user.email,
            username: user.username
        });
    } catch (error) {
        console.log(`Error logging in user: ${error.message}`);
        res.status(500).json({ message: "Server error" });
    }
};

export { createUser, loginUser }; // Export the createUser and loginUser functions to be used in route handlers