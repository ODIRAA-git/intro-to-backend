import mongoose, {Schema} from "mongoose"; // Import Mongoose and the Schema constructor
import bcrypt from "bcrypt"; // Import bcrypt for password hashing

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

// Pre-save hook to hash the password before saving the user document
userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return; // If the password field hasn't been modified, skip hashing
    }
    this.password = await bcrypt.hash(this.password, 10); // Hash the password with a salt round of 10
});

// Compare the provided password with the stored hashed password
userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password); // Compare the candidate password with the stored hashed password
};
    
 export const User = mongoose.model("User", userSchema); // Create the User model from the schema