import { Router } from "express";
import { getAllUsers } from "./users.controller.js";


const router= Router()

router.get("/", getAllUsers)

export {router}