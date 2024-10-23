
import { DataTypes, Sequelize } from 'sequelize'
import { v4 as uuidv4 } from 'uuid'
import db from '../helper/db.helper.js'

const User = db.sequelize.define(
    'user', {
        user_id: {
            type : DataTypes.UUID,
            primaryKey: true,
            defaultValue:()=> uuidv4()
        },
        user_email:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        user_name:{
            type: DataTypes.STRING
        }
    }

)

export default User