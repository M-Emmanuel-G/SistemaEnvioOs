import { Users } from "../models/Users";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    createUser = async ({id, nameUser, email, cpf}:Users):Promise <void>=>{
       try {
        await UserDatabase.connection
            .insert({
                id,
                nameUser,
                email,
                cpf
        })
        .into('Users')
       } catch (error:any) {
        throw new Error(error.message)
       }
    }

    readUser = async ()=>{
        try {
            const result = await UserDatabase.connection.select().from('Users')
            
            return result
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    updateUser = async ():Promise <void>=>{}

    deleteUser = async ({id}:any):Promise <void>=>{
        try {
            await UserDatabase.connection
                .delete()
                .where({'id':id})
                .from('Users')
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    searchCpf = async (cpf:any)=>{
        
        try {
            const result = UserDatabase.connection.select().from('Users').where({cpf})
            return result
        } catch (error:any) { 
            throw new Error(error.message)
        }

    }
        
    searchEmail = async ():Promise <void> =>{}
}