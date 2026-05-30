export class traduccionController {

    async holaTraduccion (nombre:string ): Promise<string> {
        const respuesta:string = `Hello ${nombre}`;
        return respuesta;
    }

    async comoEstasTraduccion (nombre:string): Promise<string> {
        const respuesta:string = `how are you ${nombre}`;
        return respuesta;
    }

    async queEdadTienesTraduccion(nombre:string): Promise<string> {
        const respuesta:string = `how old you ${nombre}`;
        return respuesta;
    }

    async estasLocoTraduccion (nombre:string): Promise<string> {
        const respuesta:string = `you are crazy ${nombre}`;
        return respuesta;
    }

}
  
