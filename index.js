 import express from 'express';
import {  studentsRouter } from './routers/students.js';
import { mentorsRouter } from './routers/mentor.js';
 import dotenv from "dotenv";
import { userRouter } from './routers/user.js';
import { isAuthenticated } from './Authentication/auth.js';



//config dotenv
 dotenv.config();
//initializing server
 const app = express();
 //middleware for post and put
 app.use(express.json());

 const port = process.env.port;
 //studentsRouter
app.use("/students",isAuthenticated ,studentsRouter)

app.use("/users",userRouter)
//mentorsRouter
app.use("/mentors", mentorsRouter)
//starting the app
 app.listen(`${port}`,()=>console.log(`localhost:${port}`));
 