//export class Es exportar la plantilla predefinida y permite compartir con el resto del proyecto. definimos todo lo que viene abajo.
export class MoteroController {

//async es una funcion asincrona, significa que devuelve operaciones que pueden tardar un tiempo sin que se bloquee el resto del programa. siempre devuelve promise.
//promise es la promesa de que devolvera el valor cuando lo tenga.
//cosnt Es una variable constante, una vez definido su valor, no se puede reasignar ejem: (Nombre del motero).
//Return Es la salida de la funcion, lo que devuelve despues de todo el proceso.
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