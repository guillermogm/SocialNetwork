import mongoose from "mongoose";



export const dbConnection=() =>{
    return mongoose.connect(process.env.MONGO_URI,{})
}

export const dbDisconnection= ()=>{
    return mongoose.disconnect();
}