import 'dotenv/config'
import express from 'express'
import router from './api/routers/index.js'

const app = express()
app.use(express.json());

app.use('/api', router)
app.listen(process.env.PORT, ()=>{
    console.log('server is listing on the 3000 port')
})