import {prisma} from "../lib/prisma.ts"


export const adminCheck = async(req,res, next) => {

    try {

        const id = req.user.id

    const user = await prisma.users.findUnique({
        where:{
            id: +id
        },
        select:{
            role: true
        }
    })

    if(!user){
        return res.status(404).json({
            message: "user not found"
        })
    }

    if(user.role !== "ADMIN"){
        return res.status(403).json({
            message: "access denied admin only"
        })
    }

    next()

        
    } catch (error) {
        
        return res.status(500).json({
            message: "server error"
        })
    }
    

}