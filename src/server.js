import express from "express"
import "dotenv/config"
import { dbConnection } from "./database/db.js"
import { router } from "./router.js"

const app= express()
const PORT= process.env.PORT || 4010
app.use(express.json()) 

app.get("/healthy",(_,res) =>{
   return res.status(200).json({
        success: true,
        message:"Server is healthy"
    })
})

app.use("/api", router)

dbConnection().then(()=>{
    console.log("Database connected")
    app.listen(PORT, ()=>{
        console.log(`Server running in ${PORT}`)
    }) 
}).catch( error =>{
    connsole.log("Error connection: "+error.message)
})