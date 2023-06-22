import jwt from "jsonwebtoken";

export async function isAuthenticated(req,res,next){
   try {
    const token = req.headers["auth-token"];
 if(!token){
   return res.status(400).json({data: "Token not found"})
 }
    const validateUser = 
    jwt.verify(token, process.env.secretkey)
next()
   } catch (error) {
    console.log(error)
    res.status(400).json({data: "Invalid authorization"})
   }
 
}
