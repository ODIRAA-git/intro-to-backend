import mongoose, {Schema} from "mongoose"; // Import Mongoose and the Schema constructor

// Define the User schema with a username field
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true, 
            lowercase: true, 
            trim: true, // Remove whitespace from the beginning and end of the username
            minLength: 3, 
            maxLength: 30 
        },
        email: {
            type: String,
            required: true,
            unique: true, 
            lowercase: true, 
            trim: true, 
            match: [/.+@.+\..+/, "Please enter a valid email address"] // Validate email format
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 128,
        }
    },
    { timestamps: true } // Automatically add createdAt and updatedAt fields
);
    
 export const User = mongoose.model("User", userSchema); // Create the User model from the schema