
export const isAdmin= (req, res, next)=>{
    try {

    if (req.tokenData.role === "user"){
        return res.status(401).json({
            success:false,
            message:"Unauthorized"
        })
    }

    next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error Authentication"
        })
    }

}