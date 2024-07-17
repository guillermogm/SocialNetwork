import bcrypt from "bcrypt"
import User from "../users/users.model.js"

export const registerUser = async(req, res)=>{
    try {
        const {email, password}= req.body
        if (!email ||!password ){
            return res.status(400).json({
                success:false,
                message:"Error not email or password found",
            })
        }
        if(password.length < 6 || password.length > 20){
            return res.status(400).json({
                success:false,
                message:"Password must be between 6 and 20 characters",
            })
        }
       const passwordHash= bcrypt.hashSync(password,parseInt(process.env.SALT_ROUNDS))

        const newUser= await User.create({
            email:email,
            password:passwordHash
        })
        return res.status(200).json({
            success:true,
            message:"User created successfully",
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error registering user",
            error:error.message
        })
    }
}