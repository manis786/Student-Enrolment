import express from "express"
import config from "./config/config.js"
import connectDB from "./config/connectDB.js"






const app = express()
app.use(express.json())
connectDB()

app.listen(config.PORT, () => {
    console.log(`Server is UP and Running on PORT # ${config.PORT}`)
})