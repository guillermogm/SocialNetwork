import { Router } from "express";
import { router as authRoutes } from "./entities/auth/auth.routes";
// import { router as userRoutes} from "./entities/users/users.routes.js";

const router= Router()

router.use("/auth", authRoutes)

// router.use("/users", userRoutes)

export {router}