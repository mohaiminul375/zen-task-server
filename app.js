import express from "express";
import cors from "cors";
const app = express();
// middleware
app.use(cors());
app.use(express.json());

import userRouter from './routers/user.router.js';
import todoRouter from './routers/todo.router.js';

// 
app.use('/users', userRouter)
app.use('/todo', todoRouter)
export { app }