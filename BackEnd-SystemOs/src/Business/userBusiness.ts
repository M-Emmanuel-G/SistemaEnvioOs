import { InvalidformatEmail } from './../error/UserErrors';
import { IsNaN, IsNotString, NotInserted } from '../error/UserErrors';
import { generateId } from '../services/isGenerator';
import { UserDatabase } from './../DataBase/userDatabase';

export class UserBusiness{
    
        createUser = async ({nameUser, email, cpf}:any):Promise <void>=>{
            try {
                const id = generateId();

                if(!nameUser || !email || !cpf) throw new NotInserted()
                if(isNaN(cpf)) throw new IsNaN
                if(!nameUser.toString() || !email.toString()) throw new IsNotString
                if(!email.includes('@')) throw new InvalidformatEmail()




                const userDatabase = new UserDatabase()
                await userDatabase.createUser({id, nameUser, email, cpf})                
            } catch (error:any) {
                throw new Error(error.message);
            }

        }

        readUser = async ()=>{
            try {
                const userDatabase = new UserDatabase() 
                return await userDatabase.readUser()
                
            } catch (error:any) {
                throw new Error(error.message);
            }
        }

        updateUser = async ():Promise <void>=>{}

        deleteUser = async ({id}:any):Promise <void>=>{
            try {
                if(!id) throw new Error('Id não foi informado.')
                const userDatabase = new UserDatabase()
                await userDatabase.deleteUser(id)
            } catch (error:any) {
                throw new Error(error.message);
            }
        }

        searchCpf = async ({cpf}:any)=>{
          const userDatabase = new UserDatabase()
          return await userDatabase.searchCpf(cpf)
        }

        searchEmail = async ():Promise <void> =>{}
}