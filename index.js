 import express from 'express';
import {  studentsRouter } from './routers/students.js';
import { mentorsRouter } from './routers/mentor.js';
 import dotenv from "dotenv";
import { userRouter } from './routers/user.js';
import { isAuthenticated } from './Authentication/auth.js';
import cors from "cors"


//config dotenv
 dotenv.config();
//initializing server
 const app = express();
 //middleware for post and put
 app.use(express.json());
 app.use(cors());
 const port =  8080;
 //studentsRouter
app.use("/students",studentsRouter)

app.use("/users",userRouter)
//mentorsRouter
app.use("/mentors", mentorsRouter)
//starting the app
 app.listen(`${port}`,()=>console.log(`localhost:${port}`));
 