import { Sequelize } from "sequelize";


const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    'root',
    {
        host : process.env.HOST,
        dialect: 'mysql',
        logging : false
    }
)
sequelize.authenticate()
.then(()=>{
    console.log('connection successfully');
    
}).catch((err)=>{
    console.log('connection fail', err);

})

const db = {Sequelize, sequelize}

db.sequelize
.sync({
    alter: true
}).then(()=>{
    console.log('model mirgrate successfully');
}).catch((error)=>{
    console.log(error)
})

export default db