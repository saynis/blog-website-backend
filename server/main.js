import express from "express";

const app = express()
app.use(express.json())


import userRoute from "../routes/userRoute.js"
app.use("/api/users/", userRoute)

import postRoutes from '../routes/postsRoute.js'
app.use("/api/posts/", postRoutes)



app.listen(3000, () => {
    console.log("http://localhost:3000")
})