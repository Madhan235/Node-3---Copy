import jwt from "jsonwebtoken";

export async function isAuthenticated(req,res, next){
   
    const token = req.headers["auth-token"];
 if(!token){
   return res.status(400).json({data: "Invalid authorization"})
 } 
    jwt.verify(token, process.env.secretkey)

next();
   
 
}
