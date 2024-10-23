import  jwt  from "jsonwebtoken"


export const authenticateJwT = (req,res,next)=>{
    const token = req.header('Authorization')?.split(' ')[1]
    if(!token) return res.status().json({message: 'Access denied'})
        try{
         const verify = jwt.verify(token, process.env.SECRET_KEY)
         req.user = verify
         next()
    }catch(error){
      res.status(400).json({message: 'invalide token'}) 
    }

}

