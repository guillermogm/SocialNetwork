export const isSuperAdmin= (req, res, next)=>{
    try {

    if (req.tokenData.role !== "super_admin"){
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