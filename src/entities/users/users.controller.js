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
        const userProfile = await User.findOne({ _id: userId })

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
        await User.findOneAndUpdate({ _id: userId },
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

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id

        const userDelete = await User.findByIdAndDelete({ _id: userId })
        
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
