import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()
import { UserRouter } from './Routes/user.js'

const app=express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3001"],
    credentials:true
}))
app.use(cookieParser())
app.use('/auth',UserRouter)

mongoose.connect('mongodb://localhost:27017/authentication')

app.listen(process.env.PORT,()=>{
    console.log("server is running at "+process.env.PORT);
})