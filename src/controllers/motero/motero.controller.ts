export class MoteroController {

    async registrarMotero ( nombre:string ) : Promise<string> {
        const respuesta:string = `El motero ${nombre} ha sido registrado/a correctamente`;
        return respuesta;
    }

    async sacarDelGrupo ( nombre:string ) : Promise<string> {
        const respuesta:string = `El motero ${nombre} ha sido sacado del grupo correctamente`;
        return respuesta;
    }

    async obtenerInfo ( nombre:string ) : Promise<string> {
        const respuesta:string = `Informacion del motero ${nombre}`;
        return respuesta;
    }

    async repostar ( nombre:string ) : Promise<string> {
        const respuesta:string = `La moto de ${nombre} ha sido repostada correctamente`;
        return respuesta;
    }

    async cambiarLlantas ( nombre:string ) : Promise<string> {
        const respuesta:string = `Las llantas de la moto de ${nombre} han sido cambiadas correctamente`;
        return respuesta;
    }
}