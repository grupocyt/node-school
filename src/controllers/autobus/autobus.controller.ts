import { AutobusApplications } from "../../applications/autobus/autobus.aplication";
import { AutoBusModel } from "../../applications/models/autobus/autobus.model";

export class autobuscontroller {

    async ObtenerInfoAutobus () : Promise<AutoBusModel[]> {
        const respuesta:AutoBusModel[] = new AutobusApplications().get()
        return respuesta;
    }

  async ObtenerInfoHorarios () : Promise<string> {
        const respuesta:string = `Informacion del horario del autobus`;
        return respuesta;
    }

  async ObtenerInfoRecorrido () : Promise<string> {
        const respuesta:string = `Informacion del puesto del recorrido del autobus`;
        return respuesta;
    }

     async ObtenerInfoEstadoAutobus () : Promise<string> {
        const respuesta:string = `Informacion del estado del autobus`;
        return respuesta;
    }

}
  
