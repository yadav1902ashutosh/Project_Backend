import dotenv from "dotenv";
dotenv.config({
    path: './.env'

});
import connectDB from "./db/index.js"
import { app } from './app.js';

connectDB()
.then( () => {
    //listening for an event i.e error
    app.on("error", (error) => {
        console.log("EROR: ",error);
        throw error
    })

    //listening to the port
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is listening to PORT: ${process.env.PORT}`)
    })
}
)
.catch((error) => {
    console.log("MongoDB Connection Failed !!!", error)
})











/*
import express from "express"
const app = express()
(async () => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error) => {
        console.log("ERROR:", error);
        throw error
       }) 

       app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`)
       })
    }
    catch(error){
        console.error("ERROR: ", error)
        throw error
    }
})()
*/