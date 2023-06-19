import express from 'express';
import { addStudent, deleteStudent, editStudent, getAllStudents, getStudentById } from '../contorllers/students.js';

const router = express.Router();

router.get("/all", async (req, res)=>{

    try {
        if(req.query.experience){
            req.query.experience = +req.query.experience
        }
        if(req.query.taskCompletion ){
            req.query.taskCompletion   = +req.query.taskCompletion  
        }
            const students = await getAllStudents(req);
        if(students.length <= 0){
            res.status(404).json({data:"db not found"});
            return;
        }
        res.status(200).json({data: students});
            
        } catch (error) {
            console.log(error);
            res.status(500).json({data:"code error"});
        }
})

router.get("/:id", async (req, res)=>{
try {
    const {id} = req.params;
    const student = await getStudentById(id);
if(!student){
     return res.status(400).json({data:"data not found"})
 
}
res.status(200).json({data:student})

    
} catch (error) {
    console.log(error);
    res.status(500).json({data:"code error"});
}
})

router.post("/add", async (req, res)=>{
    try {
        const newStudent = req.body;
          if(!newStudent){
            return res.status(400).json({data:"data not found"})
            
          }
          const result = await addStudent(newStudent)
          res.status(200).json({data:{result:result,message:"New Student added"}})
    } catch (error) {
        console.log(error);
        res.status(500).json({data:"code error"});  
    }
})

router.put("/edit/:id", async (req, res)=>{
   try {
    const {id} = req.params;
    const updatedStudent = req.body;
    if(!id && !updatedStudent){
        return res.status(400).json({data:"data not found"})
    }
    const result = await editStudent(id,updatedStudent)
    res.status(200).json({data:{result:result,message:"Student updated"}})
   } catch (error) {
    console.log(error);
    res.status(500).json({data:"code error"});

   }
})

router.delete("/delete/:id", async (req, res)=>{
    try {
        const {id} = req.params;
    
    if(!id){
        return res.status(400).json({data:"data not found"}) 
    }
    const result = await deleteStudent(id);
    res.status(200).json({data:{result:result,message:"Student deleted"}})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({data:"code error"});

    }
    
})
export const studentsRouter = router;