import { Router } from "express";
import { registerUser } from "./auth.controller.js";

const router= Router()

router.post("/register", registerUser)
// router.post("/login", loginUser)

export {router}