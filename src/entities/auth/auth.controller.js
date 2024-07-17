import bcrypt from "bcrypt"
import User from "../users/users.model.js"
import jwt from "jsonwebtoken"

export const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Error not email or password found",
            })
        }
        if (password.length < 6 || password.length > 20) {
            return res.status(400).json({
                success: false,
                message: "Password must be between 6 and 20 characters",
            })
        }
        const passwordHash = bcrypt.hashSync(password, parseInt(process.env.SALT_ROUNDS))

        const newUser = await User.create({
            email: email,
            password: passwordHash
        })
        return res.status(200).json({
            success: true,
            message: "User created successfully",
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error registering user",
            error: error.message
        })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and Password are needed"
            })
        }
        const user = await User.findOne({
            email: email
        })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Email or password not valid"
            })
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({
                succes: false,
                message: "Email or password not valid"
            })
        }

        const token = jwt.sign({
            id: user.id,
            role: user.role
        }, process.env.SECRET, { expiresIn: '2h' });


        return res.status(200).json({
            success: true,
            Message: "User logged",
            token: token
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error log in user",
            error: error.message
        })
    }
}