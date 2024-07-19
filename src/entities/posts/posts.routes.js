import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { createPost, deletePostById, getAllPosts, getOwnPosts, getPostById, getUserPosts, likePost, updatePost } from "./posts.controller.js";


const router= Router()

router.post("/",auth, createPost)
router.delete("/:id",auth,deletePostById)
router.put("/:id",auth, updatePost)
router.get("/own",auth, getOwnPosts)
router.get("/", getAllPosts)
router.get("/users/:user", getUserPosts)
router.get("/:id", getPostById)
router.put("/like/:id",auth, likePost)

export {router}