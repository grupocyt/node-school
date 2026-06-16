 import { FileSync } from "../FileSync.applications";
import { AutoBusModel } from "../models/autobus/autobus.model";
 
 
export class AutobusApplications {

    //Lista todos los autobuses
    get():AutoBusModel[] {
        const autobuses: AutoBusModel[] = new FileSync('autobus').read()
        return autobuses
    } 

}