export class MoteroController {

    async registrarmotero ( nombre:string ) : Promise<string> {
        const respuesta:string = `El motero ${nombre} ha sido registrado/a correctamente`;
        return respuesta;
    }

    async sacardelgrupo ( nombre:string ) : Promise<string> {
        const respuesta:string = `El motero ${nombre} ha sido sacado del grupo correctamente`;
        return respuesta;
    }

    async obtenerinfo ( nombre:string ) : Promise<string> {
        const respuesta:string = `Informacion del motero ${nombre}`;
        return respuesta;
    }

    async repostar ( nombre:string ) : Promise<string> {
        const respuesta:string = `La moto de ${nombre} ha sido repostada correctamente`;
        return respuesta;
    }

    async cambiarllantas ( nombre:string ) : Promise<string> {
        const respuesta:string = `Las llantas de la moto de ${nombre} han sido cambiadas correctamente`;
        return respuesta;
    }
}