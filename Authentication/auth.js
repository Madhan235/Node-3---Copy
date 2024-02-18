import jwt from 'jsonwebtoken';

export function isAuthenticated(req,res,next){
 
    const token = req.headers["token"]
    if(!token){
      
        return res.status(401).json({data:{error:"Invalid Authorization"}})
    }
    const secret_key = "madhan23"
    jwt.verify(token,secret_key, (err, decoded) => {
        if (err) {
          return res.status(400).json({ data: { error: 'Invalid or expired token',err } });
        }else {
            // Access decoded data
            console.log(decoded?._id);
          }
          next();
    })
}