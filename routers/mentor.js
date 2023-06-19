import express from 'express';
import { addMentor, deleteMentor, editMentor, getAllMentors, getMentorsById } from '../contorllers/mentors.js';

const router = express.Router();

router.get("/all", async (req, res) => {
try {
    const mentors = await getAllMentors();
    if(mentors.length <= 0) {
        return res.status(400).json({data:"data not found"})
    }
    res.status(200).json({data:mentors})
} catch (error) {
    console.log(error)
    res.status(500).json({data:"code error"})
}
})

router.get("/:id", async (req, res)=>{
    try {
        const {id} = req.params;
        const mentor = await getMentorsById(id);
    if(!mentor){
         return res.status(400).json({data:"data not found"})
     
    }
    res.status(200).json({data: mentor})
    
        
    } catch (error) {
        console.log(error);
        res.status(500).json({data:"code error"});
    }
    })


    router.post("/add", async (req, res)=>{
        try {
            const newMentor = req.body;
              if(!newMentor){
                return res.status(400).json({data:"data not found"})
                
              }
              const result = await  addMentor(newMentor)
              res.status(200).json({data:{result:result,message:"New Mentor added"}})
        } catch (error) {
            console.log(error);
            res.status(500).json({data:"code error"});  
        }
    })

    router.put("/edit/:id", async (req, res)=>{
        try {
         const {id} = req.params;
         const updatedMentor = req.body;
         if(!id && !updatedMentor){
             return res.status(400).json({data:"data not found"})
         }
         const result = await editMentor(id,updatedMentor)
         res.status(200).json({data:{result:result,message:"Mentor updated"}})
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
        const result = await deleteMentor(id);
        res.status(200).json({data:{result:result,message:"Mentor deleted"}})
            
        } catch (error) {
            console.log(error);
            res.status(500).json({data:"code error"});
    
        }
        
    })

export const mentorsRouter = router;