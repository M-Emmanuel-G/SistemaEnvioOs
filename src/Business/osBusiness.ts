import { NotInserted, IsNotString, IsNaN } from './../error/OsErrors';
import { CustomError } from '../error/customError';
import { OsDatabase } from './../DataBase/osDatabase';


export class OsBusiness {
    showOs = async ()=>{
        try {
            const osDatabase = new OsDatabase()
            return await osDatabase.showOs()

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
    createOS = async ({osNumber, model, client, user, password, ip, http_Port, service_Port,storage, recording_Days}:any):Promise <void> =>{
        try {
            
            if(!model || !client || !user || !password || !ip || !http_Port || !service_Port || !storage || !recording_Days) throw new NotInserted()
            if(!model.toString() || !client.toString() || !password.toString() || !user.toString() || !ip.toString() || !storage.toString() ) throw new IsNotString()
            if(isNaN(http_Port) || isNaN(service_Port) || isNaN(recording_Days) ) throw new IsNaN()
            

            const osDatabase = new OsDatabase()
            await osDatabase.createOS({osNumber, model, client, user, password, ip, http_Port, service_Port,storage, recording_Days})

        } catch (error:any) {
            throw new CustomError(error.StatusCode, error.message)
        }
    }

    removeOs = async ({os}:any):Promise <void>=>{
        try {

            if(!os){
                throw new Error('o numero da O.S não foi inserido...')
            }

            const osDatabase = new OsDatabase()
            await osDatabase.removeOs(os)
            
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    updateOs = async ({os}:any, {model, client, user, password, ip, httpPort, servicePort,storage, recordingDays} :any ):Promise <void>=>{
    try {
        if(isNaN(os)) throw new Error('Numero da os não existe.')        
        if(!client) throw new Error('Falta dados para serem inseridos...')
        const osDatabase = new OsDatabase()
        await osDatabase.updateOs(os, {model, client, user, password, ip, httpPort, servicePort,storage, recordingDays})
        
    } catch (error:any) {
        throw new Error(error.message)
    }}

    searchOs = async ({os}:any):Promise <void>=>{
        try {
            const osDatabase = new OsDatabase()
            return await osDatabase.searchOs(os)
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}