import {prisma} from "../lib/prisma.ts"






// create posts
export const createPosts = async(req,res)=>{
    try {

        const id = req.user.id
        const {title, content, image, authorId} = req.body

    if(!title || !content || !authorId){
        return res.status(400).json({
            message: "please fill all feilds"
        })
    }


    const post = await prisma.posts.create({
           
        data:{
            title,
            content,
            image,
            authorId: +id
        }
    })

    res.status(201).json({
        message: "post created seccufully",
        post
    })


    } catch (error) {
        return res.status(500).json({
            message: "server errror"
        })
    }
}