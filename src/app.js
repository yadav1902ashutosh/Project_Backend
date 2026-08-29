import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// configuring cors
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//configuring different sources of inputs
app.use(express.json({
    limit: "16kb",
}))

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

//for public resources
app.use(express.static("public"))

//configuring secure cookies
app.use(cookieParser())

export { app }