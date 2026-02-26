import { Router } from "express";
import { createPost , deletePost, getAllPosts, updatePost} from "../controllers/post.controller.js"; // Import the post controller function

const router = Router();

router.post("/", createPost);
router.get("/", getAllPosts);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;