export class autobusController {

    async obtenerInfoAutobus (nombre:string ): Promise<string> {
        const respuesta:string = `Informacion del autobus ${nombre}`;
        return respuesta;
    }

    async obtenerInfoHorarios (nombre:string): Promise<string> {
        const respuesta:string = `Horario del autobus ${nombre}`;
        return respuesta;
    }

    async obtenerInfoRecorrido (nombre:string): Promise<string> {
        const respuesta:string = `Informacion del recorrido del autobus ${nombre}`;
        return respuesta;
    }

    async obtenerInfoEstadoAutobus (nombre:string): Promise<string> {
        const respuesta:string = `Informacion del estado del autobus ${nombre}`;
        return respuesta;
    }

}
  
