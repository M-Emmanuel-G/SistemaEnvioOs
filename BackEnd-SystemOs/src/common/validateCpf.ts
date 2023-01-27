
import { BaseDatabase } from '../DataBase/BaseDatabase';

export class Validate extends BaseDatabase {

    cpf = async ({cpf}:any)=>{
        const result = await Validate.connection.select().from('Users').where({cpf})
        
        return result
    }

    email = async ({email}:any)=>{
        const result = await Validate.connection.select().from('Users').where({email})
        return result
    }
}