import { Router } from "express";
import { getAllUsers, getUserProfile, updateUserProfile, deleteUserById, updateUserRole} from "./users.controller.js";
import {auth} from "../../middleware/auth.js"
import { isSuperAdmin } from "../../middleware/isSuperAdmin.js";

const router= Router()

router.get("/", auth,isSuperAdmin, getAllUsers)
router.get("/profile", auth, getUserProfile)
router.put("/profile", auth, updateUserProfile)
router.delete("/:id",auth,isSuperAdmin, deleteUserById)
router.put("/:id/role",auth,isSuperAdmin, updateUserRole)

export {router}