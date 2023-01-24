import { connection } from './../connection/connection';
import { Request, Response } from "express"
import { Os } from "../models/Os"

export const createOS = async (req:Request, res:Response):Promise <void> =>{
    const {model, client, user, password, ip, http_Port, service_Port, storage, recording_Days} = req.body
    
    const newOs = new Os( client, model, user, password, ip, http_Port, service_Port, storage, recording_Days)
    await connection.insert(newOs).into('OrderServices')

    res.status(200).send(' O.S. Registrada com sucesso... ')
}