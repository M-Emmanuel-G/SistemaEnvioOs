import { UserDTO } from './../models/userDTO';
import { InvalidformatEmail } from './../error/UserErrors';
import { EmailExist, CpfExist, IsNaN, IsNotString, NotInserted } from '../error/UserErrors';
import { generateId } from '../services/isGenerator';
import { UserDatabase } from './../DataBase/userDatabase';
import { Validate } from '../common/validateCpf';

export class UserBusiness{
    
        createUser = async ({nameUser, email, cpf}:any):Promise <void>=>{
            try {
                const id = generateId();
                const validate = new Validate()

                if(!nameUser || !email || !cpf) throw new NotInserted()
                if(!nameUser.toString() || !email.toString()) throw new IsNotString
                if(!email.includes('@')) throw new InvalidformatEmail()
                if((await validate.cpf({cpf:cpf})).length === 1) throw new CpfExist()
                if((await validate.email({email:email})).length === 1) throw new EmailExist()
                

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

        updateUser = async ({id, nameUser, email}:any):Promise <void>=>{

            try {

                if(!id || !nameUser || !email) throw new NotInserted();
                if(!nameUser.toString() || !email.toString()) throw new IsNotString
                if(!email.includes('@')) throw new InvalidformatEmail()

                const userDatabase = new UserDatabase()
                userDatabase.updateUser({id, nameUser, email})

            } catch (error:any) {
                throw new Error(error.message);
            }
        }

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

        searchEmail = async ({email}:any)=>{
            const userDatabase = new UserDatabase()
          return await userDatabase.searchEmail(email)
        }
}