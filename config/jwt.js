import jwt from "jsonwebtoken"
import "dotenv/config";

export const tokenGenarator = (user) =>{
    return jwt.sign(
     {id: user.id},
     process.env.JWT_SECRET,
     {expiresIn: "1hr"}
    )
}