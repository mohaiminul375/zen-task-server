import express from "express";
import cors from "cors"
const app = express();
// middleware
app.use(cors());
app.use(express.json());
import userRouter from './routers/user.router.js'
app.use('/user',userRouter)
export { app }