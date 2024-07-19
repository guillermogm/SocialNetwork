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
            const postDeleted = await Post.findByIdAndDelete({ _id: postId })
            if (!postDeleted) {
                return res.status(404).json({
                    success: false,
                    Message: "No post with that Id",
                })
            }
            return res.status(200).json({
                success: true,
                Message: "User deleted successfully",
            })
        }
        const postDeleted= await Post.findOneAndDelete({ 
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
            Message: "User deleted successfully",
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error log in user",
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
        console.log(userId);
        if (!title && !content) {
            return res.status(404).json({
                success: false,
                message: "No post title or content found",
            })
        }
        if (userRole !== "user") {
            const postUpdated = await Post.findByIdAndUpdate({ _id: postId },{
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
        const postUpdated=await Post.updateOne({
            _id:postId,
            user:userId
        },{
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