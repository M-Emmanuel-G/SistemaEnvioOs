
import { BaseDatabase } from '../DataBase/BaseDatabase';

export class Validate extends BaseDatabase {
    // cpf = ({cpf}:any)=>{
        
    //     let validate: any[] = []
    //    axios
    //     .get(`http://localhost:3003/user/show/${cpf}`)
    //     .then((resp)=>{
            
    //        validate.push(resp.data)
    //         ;
    //         return validate
    //     })
    //     .catch((error)=>{console.log(error);
    //     }) 
        
    // }

    cpf = async ({cpf}:any)=>{
        const result = await Validate.connection.select().from('Users')
        console.log(result);
        
        return result
    }
}