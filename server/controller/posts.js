import PostMessage from "../models/postMessages";



export const getPosts=(req,res)=>{
try{
    const postMessage=await postMessage.find();
    console.log(postMessage);
    res.status(200).json(postMessage);
}catch(error)
{
    res.ststus(404).json({message:ErrorEvent.message});
}
}
export const createPost=(req,res)=>{
    const body=req.body;
    const newPost=new postMessage(post);
    try{
        newPost.save();

        res.status(201).json(newPost);
    }catch(error)
    {
        res.status(409).json({message:error.message});
    }
}