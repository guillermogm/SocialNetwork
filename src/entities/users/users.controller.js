import User from "./users.model.js";

export const getAllUsers = async (req, res) => {
    try {
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
        const userId=req.tokenData.id
        const userProfile = await User.findOne({_id:userId})

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
        const userId=req.tokenData.id
        // const {name, email, password, }
        const userProfile = await User.findOneAndUpdate({_id:userId})

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