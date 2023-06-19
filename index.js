 import express from 'express';
import {  studentsRouter } from './routers/students.js';
import { mentorsRouter } from './routers/mentor.js';
 
//initializing server
 const app = express();
 //middleware for post and put
 app.use(express.json());

const port = 9000;
 //studentsRouter
app.use("/students",studentsRouter)

//mentorsRouter
app.use("/mentors", mentorsRouter)
//starting the app
 app.listen(port,()=>console.log(`localhost:${port}`));
 