export class MecanicaController {

    async ObtenerInfoTallerFunction () : Promise<string> {
        const respuesta:string = `Informacion del taller`;
        return respuesta;
    }

    async ObtenerInfoDuenoTallerFunction () : Promise<string> {
        const respuesta:string = "Informacion dueño taller";
        return respuesta;
    }

    async ObtenerLocalIzquierdoFunction () : Promise<string> {
        const respuesta:string = "informacion del local izquierdo";
        return respuesta;
    }

    async ObtenerLocalDerechoFunction () : Promise<string> {
        const respuesta:string = "obtener informacion del local derecho";
        return respuesta;
    }

    async ObtenerColorDelTallerFunction () : Promise<string> {
        const respuesta:string = "obtener el color del taller";
        return respuesta;
    }
    
}