import mongoose, { Schema } from "mongoose"; // Import Mongoose and the Schema constructor

// Define the Post schema with title and content fields
const postSchema = new Schema(          
    {
        name: {
            type: String,
            required: true,
            trim: true, // Remove whitespace from the beginning and end of the name
            minLength: 3,
            maxLength: 100
        },
        description: {
            type: String,
            required: true,
            trim: true, // Remove whitespace from the beginning and end of the description
            minLength: 10,
            maxLength: 1000
        },
        age: {
            type: Number,
            required: true,
            min: 0,
            max: 150
        }
    },
    {
        timestamps: true, // Automatically add createdAt and updatedAt fields
     }
);

export const Post = mongoose.model("Post", postSchema); // Create the Post model from the schema

    
    