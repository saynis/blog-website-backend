import express from "express"
import { createPosts } from "../controllers/postsController.js"
import { verifyToken } from "../middleware/authmiddleware.js"
import { adminCheck } from "../middleware/postmiddleware.js"
const routes = express.Router()


routes.post("/new", verifyToken, adminCheck, createPosts)



export default routes