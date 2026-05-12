export class MecanicaController {

    async obtenerinfotaller () : Promise<string> {
        const respuesta:string = `Informacion del taller`;
        return respuesta;
    }

    async obtenerinfoduenotaller () : Promise<string> {
        const respuesta:string = "Informacion dueño taller";
        return respuesta;
    }

    async obtenerlocalizquierdo () : Promise<string> {
        const respuesta:string = "informacion del local izquierdo";
        return respuesta;
    }

    async obtenerlocalderecho () : Promise<string> {
        const respuesta:string = "obtener informacion del local derecho";
        return respuesta;
    }

    async obtenercolordeltaller () : Promise<string> {
        const respuesta:string = "obtener el color del taller";
        return respuesta;
    }
    
}