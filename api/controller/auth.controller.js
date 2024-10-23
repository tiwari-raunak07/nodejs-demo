import models from "../model/index.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const signUp = async (req, res) => {
  console.log("rew", req.body);
  try {
    const { userName, userEmail, password } = req.body;
    const hasedPassword = await bcrypt.hash(password, 10);

    const user = models.User.create({
      user_email: userEmail,
      password: hasedPassword,
      user_name: userName,
    });

    res.status(200).json({ message: "singup succesfully" });
  } catch (error) {
    res.status(200).json({ message: "Failed", error });
  }
};

export  const login  = async(req, res)=> {
    try{
        const {userEmail, password} = req.body
        const user = await models.User.findOne({where : {user_email: userEmail}})
         const isPasswordChecked = await bcrypt.compare(password, user.password)
         if(!user) return res.status(400).json({message: 'user Not Found'})
          if(!isPasswordChecked)  return res.status(400).json({message: 'incorrect password'})
         
         const token = jwt.sign({name: user.user_name, email: user.user_email}, process.env.SECRET_KEY, {expiresIn: '1hr'})  
         console.log('token', token) 
         return res.status(200).json({message: 'logged in sussfully', token})
    }catch(err){
      console.log('eorrr', err)
    }
}

export const getUser = async( req, res) => {
   try{
     const users = await models.User.findAll({
        attributes:['user_name', 'user_email']
     })
     if(!users) return res.status(400).json({message: 'users not found'})

        return res.status(200).json({message: 'user Fetch successfully', users})
    
   }catch(err){
     console.log('error', error)
   }
}