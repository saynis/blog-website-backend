import express from "express"
import { getUserProfile, loginUser, registerUser } from "../controllers/userController.js"
import { verifyToken } from "../middleware/authmiddleware.js"

const routes = express.Router()

routes.post("/login", loginUser)
routes.post("/register", registerUser)
routes.get("/profile", verifyToken, getUserProfile)


export default routes

