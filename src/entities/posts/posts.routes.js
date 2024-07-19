import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { createPost, deletePostById, updatePost } from "./posts.controller.js";


const router= Router()

router.post("/",auth, createPost)
router.delete("/:id",auth,deletePostById)
router.put("/:id",auth, updatePost)

export {router}