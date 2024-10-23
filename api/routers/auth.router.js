import {  Router  } from "express";
import { getUser, login, signUp } from "../controller/auth.controller.js";
import { authenticateJwT } from "../middlewere/auth.middlewere.js";

 const authRouter = Router()
authRouter.post('/singup', signUp)
authRouter.post('/login', login)
authRouter.get('/getusers',authenticateJwT, getUser)



export default authRouter