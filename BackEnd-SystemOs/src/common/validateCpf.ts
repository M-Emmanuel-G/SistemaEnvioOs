import axios from "axios"

export class Validate {
    cpf = ({cpf}:any)=>{
        
        let validate: any[] = []
       axios
        .get(`http://localhost:3003/user/show/${cpf}`)
        .then((resp)=>{
            
           validate.push(resp.data)
            ;
            return validate
        })
        .catch((error)=>{console.log(error);
        })
        
    }
}