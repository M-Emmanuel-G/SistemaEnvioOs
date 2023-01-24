import { connection } from './../connection/connection';
import { Request, Response } from "express"

export const removeOs = async (req:Request, res:Response):Promise <void> =>{

    const  os_Number  = req.params 

    await connection('OrderServices')
        .delete()
        .where({os_Number})

    res.status(200).send('O.S foi removidacom sucesso...')    
}