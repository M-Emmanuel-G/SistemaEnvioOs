import { OsType } from "../models/Os";
import { BaseDatabase } from "./BaseDatabase";

export class OsDatabase extends BaseDatabase {
  showOs = async () => {
    try {
      const result = await OsDatabase.connection.select().from("OrderServices");
      return result;
    } catch (error: any) {
        throw  new Error(error.message)
    }
  };

  createOS = async (os: OsType): Promise<void> => {
    try {
      await OsDatabase.connection
        .insert({
           os_Number: os.osNumber,
          model: os.model,
          client: os.client,
          user: os.user,
          password: os.password,
          ip: os.ip,
          http_Port: os.http_Port,
          service_Port: os.service_Port,
          storage: os.storage,
          recording_Days: os.recording_Days,
        })
        .into("OrderServices");
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  removeOs = async (os: any): Promise<void> => {
    try {
      await OsDatabase.connection("OrderServices")
        .delete()
        .where({ os_Number: os });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  updateOs = async (os: any, {model, client, user, password, ip, httpPort, servicePort,storage, recordingDays}:any ): Promise<void> => {
    try {
      await OsDatabase.connection("OrderServices")
        .update({
            model: model,
            client: client,
            user: user,
            password: password,
            ip: ip,
            http_Port: httpPort,
            service_Port: servicePort,
            storage: storage,
            recording_Days: recordingDays
        })
        .where({ os_Number : os });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  searchOs = async (os:any):Promise <any>=>{
    try {

        const result = await OsDatabase
            .connection
            .select()
            .where({os_Number :os})
            .from('OrderServices')
            return result
        
    } catch (error:any) {
        throw new Error(error.message)
        
    }
  }
}
