import { connection } from './../connection/connection';
import { Request, Response } from "express"

export const showOs = async (req:Request, res:Response):Promise <void> =>{

    const result = await connection('OrderServices').select()
    res.status(200).send(result)
}