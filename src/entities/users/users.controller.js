import Post from "../posts/posts.model.js";
import User from "./users.model.js";
import bcrypt, { hash } from "bcrypt"

export const getAllUsers = async (req, res) => {
    try {
        const email = req.query.email
        if (email) {
            const emailUser = await User.findOne({ email: email })
            if (!emailUser) {
                return res.status(400).json({
                    success: false,
                    Message: "Not user found with this email",
                    data: emailUser
                })
            }
            return res.status(200).json({
                success: true,
                Message: "User found",
                data: emailUser
            })
        }
        const allUsers = await User.find()

        return res.status(200).json({
            success: true,
            Message: "All users",
            data: allUsers
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error log in user",
            error: error.message
        })
    }

}

export const getUserProfile = async (req, res) => {
    try {
        const userId = req.tokenData.id
        const userProfile = await User.findById(userId)

        return res.status(200).json({
            success: true,
            Message: "User profile",
            data: userProfile
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error log in user",
            error: error.message
        })
    }

}

export const updateUserProfile = async (req, res) => {
    try {
        const userId = req.tokenData.id
        const { name, email, password } = req.body
        let hashPassword
        if (!name && !email && !password) {
            return res.status(400).json({
                success: false,
                Message: "Not column updated",
            })
        }
        if (password) {
            hashPassword = bcrypt.hashSync(password, parseInt(process.env.SALT_ROUNDS))
        }
        await User.findOneAndUpdate(userId,
            {
                name: name,
                email: email,
                password: hashPassword
            })

        return res.status(200).json({
            success: true,
            Message: "User profile updated",
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error log in user",
            error: error.message
        })
    }

}

export const deleteUserById = async (req, res) => {
    try {
        const userId = req.params.id

        const userDelete = await User.findByIdAndDelete(userId)

        if (!userDelete) {
            return res.status(404).json({
                success: false,
                Message: "No user con that Id",
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

export const updateUserRole = async (req, res) => {
    try {
        const userId = req.params.id
        const role = req.body.role

        if (!role) {
            return res.status(400).json({
                success: false,
                Message: "Not column updated",
            })
        }
        await User.findOneAndUpdate(userId,
            {
                role: role
            })

        return res.status(200).json({
            success: true,
            Message: "User role updated",
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error log in user",
            error: error.message
        })
    }

}

export const userFollow = async (req, res) => {
    try {
        const userId = req.params.userId
        const ownId = req.tokenData.id

        const follower = await User.findById(userId)
        const following = await User.findById(ownId)

        if (userId === ownId) {
            return res.status(40).json({
                success: false,
                message: "You con't follow yourself.",
            })
        }

        if (!follower) {
            return res.status(404).json({
                success: false,
                message: "No user with that Id.",
            })
        }

        if (follower.followers.includes(ownId)) {
            follower.followers.splice(follower.followers.indexOf(ownId), 1)
            following.following.splice(following.following.indexOf(userId), 1)

            await follower.save()
            await following.save()

            return res.status(200).json({
                success: true,
                message: "User unfollowed.",
            })
        }
        follower.followers.push(ownId)
        following.following.push(userId)

        await follower.save()
        await following.save()

        return res.status(200).json({
            success: true,
            message: "User followed",
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error following user",
            error: error.message
        })
    }

}
