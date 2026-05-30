export class MecanicaController {

    async obtenerInfoTaller (nombre:string) : Promise<string> {
        const respuesta:string = `Informacion del taller`;
        return respuesta;
    }

    async obtenerInfoDuenoTaller (nombre:string) : Promise<string> {
        const respuesta:string = "Informacion del dueño del taller";
        return respuesta;
    }

    async obtenerLocalIzquierdo (nombre:string) : Promise<string> {
        const respuesta:string = "informacion del local izquierdo";
        return respuesta;
    }

    async obtenerLocalDerecho (nombre:string) : Promise<string> {
        const respuesta:string = "obtener informacion del local derecho";
        return respuesta;
    }

    async obtenerColorDelTaller (nombre:string) : Promise<string> {
        const respuesta:string = "obtener el color del taller";
        return respuesta;
    }
    
}