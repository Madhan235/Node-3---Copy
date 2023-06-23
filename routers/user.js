import express from "express";
import {addUser, generateJwtToken, getUser } from "../contorllers/user.js";
import bcrypt from "bcrypt"

const router = express.Router();
router.post("/signup", async (req,res)=>{
try {
    const salt = await bcrypt.genSalt(10);
    const user = await getUser(req.body.email)
    if(!user){ 
        const hashedPassword = await bcrypt.hash(req.body.password, salt) 
    const hashedUser = await {...req.body, password : hashedPassword}
await addUser(hashedUser)
   return res.status(200).json({data:{userInfo : hashedUser} })    
}
    res.status(400).json({data: "Sorry, E-mail already exists"})

} catch (error) {
    console.log(error);
    res.status(500).json({data:"code error"});
}
})

router.post("/login", async (req, res)=>{
    try {
    const user = await getUser(req.body.email)
// console.log(user)
        if(!user){
            return res.status(400).json({data:"Invalid email, sign-up first"})
        }
        const validatePassword = 
        await bcrypt.compare(req.body.password, user.password)
        if(!validatePassword){
            return res.status(400).json({data:{message:"Invalid password"}})
        }
        
      const token = generateJwtToken(user._id)
   console.log("generatedToken:",token);
        res.status(200).json({data:{message:"successfully Logged-In", token:token}})

    } catch (error) {
        console.log(error);
    res.status(500).json({data:"code error"}); 
    }
}) 

export const userRouter = router;
