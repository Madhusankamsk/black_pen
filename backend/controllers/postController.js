const getPosts = (req,res)=>{
    res.status(200).json({message:"get posts"});   
}
const createPost = (req,res)=>{
    res.status(200).json({message:"create posts"});   
}
const updatePost = (req,res)=>{
    res.status(200).json({message:`update posts ${req.params.id}`});   
}
const deletePost = (req,res)=>{
    res.status(200).json({message:`delete posts ${req.params.id}`});   
}


module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost
}