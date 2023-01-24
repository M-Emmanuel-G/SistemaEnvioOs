import { connection } from './../connection/connection';
import { Request, Response } from "express"

export const updateOs = async (req:Request, res:Response):Promise <void> =>{

    const os_Number = req.params
    const [user, password, ip, http_Port, service_Port, storage, recording_Days] = req.body

    await connection('OrderServices')
        .update({user, password, ip, http_Port, service_Port, storage, recording_Days})
        .where([os_Number])

        res.status(200).send('Editado com sucesso...')
}