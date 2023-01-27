import { Users } from "../models/Users";
import transporter from "../services/transporter";
import { BaseDatabase } from "./BaseDatabase";
import dotenv from "dotenv"

dotenv.config()

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

    //    const send = await transporter.sendEmail({
    //     from:process.env.NODEMAILER_USER,
    //     to:'emmanuel-jnr@hotmail.com',
    //     subject:'Contra criada com sucesso...',
    //     text:'Parabens... Sua  cona foi criada com sucesso... Obrigado pro se registrar em nosso sistema...'
    //    })

    //    console.log(send);
       
    }

    readUser = async ()=>{
        try {
            const result = await UserDatabase.connection.select().from('Users')
            
            return result
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    updateUser = async ({id, nameUser, email}:any):Promise <void>=>{
        try {
            await UserDatabase.connection
                .update({
                    nameUser: nameUser, 
                    email: email
                })
                .from('Users')
                .where({id})
        } catch (error:any) {
            throw  new Error(error.message)
        }
    }

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
        
    searchEmail = async ({email}:any) =>{
        try {
            const result = UserDatabase.connection.select().from('Users').where({email})
            return result
        } catch (error:any) { 
            throw new Error(error.message)
        }
    }
}