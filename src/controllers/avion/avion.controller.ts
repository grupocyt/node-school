export class MoteroController {

    async registrarAvion ( nombre:string ) : Promise<string> {
        const respuesta:string = `El avion ${nombre} ha sido registrado correctamente`;
        return respuesta;
    }

    async eliminarAvionDelRegistro ( nombre:string ) : Promise<string> {
        const respuesta:string = `El avion ${nombre} ha sido sacado del registro correctamente`;
        return respuesta;
    }

    async obtenerInfo ( nombre:string ) : Promise<string> {
        const respuesta:string = `Informacion del avion ${nombre}`;
        return respuesta;
    }

    async repostar ( nombre:string ) : Promise<string> {
        const respuesta:string = `El avion ${nombre} ha sido repostado correctamente`;
        return respuesta;
    }
}