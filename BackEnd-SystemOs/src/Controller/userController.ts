import { log } from 'console';
import { UserBusiness } from './../Business/userBusiness';
import { Request, Response } from "express"
export class UserController{
    
    createUser = async (req:Request, res:Response):Promise <void>=>{
        try {
            const { nameUser, email, cpf } = req.body
            const userBusiness = new UserBusiness()
            await userBusiness.createUser({ nameUser, email, cpf})
            res.status(20).send('Usuario Criado com Sucesso...')
        } catch (error:any) {
        res.status(400).send(error.message)
       }
    }

    readUser = async (req:Request, res:Response)=>{
        try {
            const userBusiness = new UserBusiness()
            const result = await userBusiness.readUser()
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    updateUser = async (req:Request, res:Response):Promise <void>=>{}

    deleteUser = async (req:Request, res:Response):Promise <void>=>{
        try {
            const {id} = req.params
            const userBusiness = new UserBusiness()
            await userBusiness.deleteUser({id})
            res.status(200).send('Usuario foi deletado...')
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    searchCpf = async (req:Request, res:Response)=>{
     try {
        const {cpf} = req.params

        const userBusiness = new UserBusiness()
        const result = await userBusiness.searchCpf({cpf})
        res.send(result)
     } catch (error:any) {
        throw new Error(error.message)
     }
       
    }
        
    searchEmail = async (req:Request, res:Response):Promise <void> =>{}

}

