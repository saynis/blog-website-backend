import { prisma } from "../lib/prisma.ts"
import bcrypt from "bcryptjs";
import { tokenGenarator } from "../config/jwt.js";
const salt = bcrypt.genSaltSync(10)


export const registerUser =  async(req,res)=>{

    const {username , email, password} = req.body

    if(!username || !email || !password){
        return res.status(400).json({
            message: "all feild are required"
        })
    }


    const isUser =  await prisma.users.findUnique({
        where:{
            email: email
        }
    })

    if(isUser){
       return res.status(400).json({
        message: "email all ready exists"
       })
    }

    const hashedPassword = bcrypt.hashSync(password, salt)

    const user = await prisma.users.create({
        data:{
            username,
            email,
            password: hashedPassword
        }
    })

    const token = tokenGenarator(user)

    res.status(201).json({
        message: "craeted seccufully",
        user,
        token
    })

}


export const loginUser = async(req,res)=>{
    try {
          const {email , password} = req.body

    if(!email || !password){
        return res.status(400).json({
            message: "all feild are required"
        })
    }


    const user = await prisma.users.findUnique({
        where:{
            email: email
        }
    })

    if(!user){
        return res.status(400).json({
            message: "email or password is incorrect"
        })
    }


    const dehashedPassword =  bcrypt.compareSync(password, user.password)

    if(!dehashedPassword){
        return res.status(400).json({
            message: "email or password is incorrect"
        })
    }



   const token = tokenGenarator(user)

    res.status(200).json({
        message: "login seccufully",
        user,
        token
    })
    } catch (error) {
        console.log(error)
    }
}