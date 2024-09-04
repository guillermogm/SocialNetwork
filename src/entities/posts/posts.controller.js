import User from "../users/users.model.js"
import Post from "./posts.model.js"

export const createPost = async (req, res) => {
    try {
        const userId = req.tokenData.id
        const { title, content } = req.body

        if (!title) {
            return res.status(404).json({
                success: false,
                message: "No post title found",
            })
        }
        await Post.create({
            title: title,
            content: content,
            user: userId
        })
        return res.status(200).json({
            success: true,
            message: "Post created successfully",
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating post",
            error: error.message
        })
    }
}

export const deletePostById = async (req, res) => {
    try {
        const userId = req.tokenData.id
        const userRole = req.tokenData.role
        const postId = req.params.id

        if (userRole !== "user") {
            const postDeleted = await Post.findByIdAndDelete(postId)
            if (!postDeleted) {
                return res.status(404).json({
                    success: false,
                    Message: "No post with that Id",
                })
            }
            return res.status(200).json({
                success: true,
                Message: "Post deleted successfully",
            })
        }
        const postDeleted = await Post.findOneAndDelete({
            _id: postId,
            user: userId
        })

        if (!postDeleted) {
            return res.status(404).json({
                success: false,
                Message: "No post with that Id or is not your post.",
            })
        }

        return res.status(200).json({
            success: true,
            Message: "Post deleted successfully",
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error log in post",
            error: error.message
        })
    }

}

export const updatePost = async (req, res) => {
    try {
        const userId = req.tokenData.id
        const userRole = req.tokenData.role
        const postId = req.params.id
        const { title, content } = req.body

        if (!title && !content) {
            return res.status(404).json({
                success: false,
                message: "No post title or content found",
            })
        }
        if (userRole !== "user") {
            const postUpdated = await Post.findByIdAndUpdate({_id:postId}, {
                title: title,
                content: content
            })

            if (!postUpdated) {
                return res.status(404).json({
                    success: false,
                    Message: "No post with that Id",
                })
            }

            return res.status(200).json({
                success: true,
                Message: "Post updated successfully",
            })
        }
        const postUpdated = await Post.findOneAndUpdate({
            _id: postId,
            user: userId
        }, {
            title: title,
            content: content
        })

        if (!postUpdated) {
            return res.status(404).json({
                success: false,
                Message: "No post with that Id or is not your post.",
            })
        }

        return res.status(200).json({
            success: true,
            message: "Post updated successfully",
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error updating post",
            error: error.message
        })
    }
}

export const getOwnPosts = async (req, res) => {
    try {
        const userId = req.tokenData.id

        const userPosts = await Post.find({ user: userId })
        return res.status(200).json({
            success: true,
            message: "Posts retrived successfully",
            data: userPosts
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error retriving post",
            error: error.message
        })
    }
}

export const getAllPosts = async (req, res) => {
    try {

        const allPosts = await Post.find()
        return res.status(200).json({
            success: true,
            message: "Posts retrived successfully",
            data: allPosts
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error retriving posts",
            error: error.message
        })
    }
}


export const getPostById = async (req, res) => {
    try {
        const postId = req.params.id

        const post = await Post.findById(postId)
        if (!post) {
            return res.status(404).json({
                success: false,
                Message: "No post with that Id.",
            })
        }
        return res.status(200).json({
            success: true,
            message: "Post retrived successfully",
            data: post
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error retriving post",
            error: error.message
        })
    }
}

export const getUserPosts = async (req, res) => {
    try {
        const userId = req.params.user

        const userPosts = await Post.find({user:userId})
        return res.status(200).json({
            success: true,
            message: "Posts retrived successfully",
            data: userPosts
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error retriving post",
            error: error.message
        })
    }
}

export const likePost = async (req, res) => {
    try {
        const postId = req.params.id
        const userId = req.tokenData.id
        
        const post = await Post.findById(postId)

        if (!post) {
            return res.status(404).json({
                success: false,
                Message: "No post with that Id.",
            })
        }
        if(post.likes.includes(userId)){
           
            post.likes.splice(post.likes.indexOf(userId),1)
           
           const updateLike= await post.save()

           return res.status(200).json({
            success:true,
            message:"User dislike this Post.",
            data:updateLike
           })
        }
        post.likes.push(userId)
        const updateLike= await post.save()
        return res.status(200).json({
            success: true,
            message: "User likes this Post.",
            data: updateLike
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error liking post",
            error: error.message
        })
    }
}

export const getFollowingPost = async (req, res) => {
    try {
        const userId= req.tokenData.id
        
        const currentUser = await User.findById(userId).populate("following");

        if(currentUser.following.length < 1){
            return res.status(404).json({
                success: false,
                message: "You aren't following any user."
            })
        }

        const followingUserIds = currentUser.following.map(user => user._id);
        
        const posts = await Post.find({ user: { $in: followingUserIds } }).populate("user");

        return res.status(200).json({
            success: true,
            message: "Posts retrived successfully",
            data:posts
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error retriving posts",
            error: error.message
        })
    }
}