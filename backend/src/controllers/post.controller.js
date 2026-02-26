import { Post } from "../models/post.model.js"; // Import the Post model from the post.model.js file
// Define an asynchronous function to handle creating a new post

const createPost = async (req, res) => {    
    try{
        const { name, description, age } = req.body; // Extract post details from the request body  
        // Check if any required fields are missing
        if (!name || !description || age === undefined) { 
            return res.status(400).json({ message: "All fields are required" }); // Send a 400 response if validation fails
        }
        // Create a new post instance with the provided details
        const newPost = await Post.create({
            name: name.trim(),
            description: description.trim(),
            age: age,
        });
        res.status(201).json({ 
            message: "Post created successfully", 
            postId: newPost._id,
            name: newPost.name,
            description: newPost.description,
            age: newPost.age,
            timestamps: newPost.createdAt
            
        }); // Send a 201 response with the new post's ID and details
    
    }catch(error){
        res.status(500).json({ message: "Server error", detail: error?.message }); // Send a 500 response if an error occurs        
        
    }
};
//To get all posts, you would typically define another function like this:
const getAllPosts = async (req, res) => {
    try{
        const posts = await Post.find(); // Retrieve all posts from the database
        res.status(200).json(posts); // Send a 200 response with the list of posts

    }catch (error){
        res.status(500).json({ message: "Server error", detail: error?.message }); // Send a 500 response if an error occurs
    }
    };
    // To update a post, you would define a function like this:
    const updatePost = async (req, res) => {
        try{
            if(Object.keys(req.body).length === 0){ // Check if the request body is empty
                return res.status(400).json({ message: "Request body is empty" }); // Send a 400 response if the request body is empty
            };
        
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, 
            { new: true }); // Find the post by ID and update it with the new data
        
        if(!post){          
            return res.status(404).json({ message: "Post not found" }); // Send a 404 response if the post is not found
        }
        res.status(200).json({ message: "Post updated successfully", post }); // Send a 200 response with the updated post details
        }catch(error){
            res.status(500).json({ message: "Server error", detail: error?.message }); // Send a 500 response if an error occurs
        }
    }
    //To delete a post, you would define a function like this:
    const deletePost = async (req, res) => {
        try{
            const deleted = await Post.findByIdAndDelete(req.params.id); // Find the post by ID and delete it
            if(!deleted){ 
                return res.status(404).json({ message: "Post not found" }); // Send a 404 response if the post is not found
            }
            res.status(200).json({ message: "Post deleted successfully" }); // Send a 200 response confirming deletion
        }catch(error){
            res.status(500).json({ message: "Server error", detail: error?.message }); // Send a 500 response if an error occurs    
        }
        }
    


export { createPost, getAllPosts, updatePost, deletePost }; // Export the post controller functions to be used in other parts of the application   