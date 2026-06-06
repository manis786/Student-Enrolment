import express from "express"
import config from "./config/config.js"
import connectDB from "./config/connectDB.js"
import studentroutes from "./routes/student.route.js"



const app = express()
app.use(express.json())
connectDB()

// API

app.use("/api",studentroutes)



app.listen(config.PORT, () => {
    console.log(`Server is UP and Running on PORT # ${config.PORT}`)
})