import User from "./users.model.js";

export const getAllUsers= async(req, res)=>{
    try {
     const allUsers= await User.find()
     
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