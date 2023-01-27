import { OsBusiness } from './../Business/osBusiness';
import {Request, Response} from 'express'

export class OsController {
    showOs = async ( req:Request, res:Response)=>{
        try {

            const osBusiness = new OsBusiness()
            const result = await osBusiness.showOs()
            res.status(200).send(result)

        } catch (error:any) {
            res.send(error.message)
        }
    }
    createOS = async (req:Request, res:Response):Promise <void>=>{
        try {
            const {model, client, user, password, ip, http_Port, service_Port,storage, recording_Days} = req.body
            const osBusiness = new OsBusiness()
            

            await osBusiness.createOS({model, client, user, password, ip, http_Port, service_Port,storage, recording_Days})
            res.status(200).send('O.S. foi registrada com sucesso...')
        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message || error.mysql)
        }
    }

    removeOs = async (req:Request, res:Response):Promise <void>=>{
        try {
            const {os} = req.params
            const osBusiness = new OsBusiness()
            await osBusiness.removeOs({os})
            res.status(200).send('O.S. foi excluida com sucesso...')
            // res.status(200).send(os)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    updateOs = async (req:Request, res:Response):Promise <void>=>{
        try {
            const { os } = req.params
            const { model, client, user, password, ip, httpPort, servicePort,storage, recordingDays} = req.body
            const osBusiness = new OsBusiness()
            await osBusiness.updateOs({os}, {model , client, user , password , ip  ,httpPort  ,servicePort , storage, recordingDays})
            res.status(200).send('OS foi editada com sucesso...')

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    searchOs = async (req:Request, res:Response):Promise <void>=>{
        try {
            const {os} = req.params
            const osBusiness =  new OsBusiness()
            const result = await osBusiness.searchOs({os})
            res.status(200).send(result)
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}