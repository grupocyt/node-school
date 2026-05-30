export class camareroscontroller {

    async obtenerCamarero (nombre:string) : Promise<string> {
        const respuesta:string = `Informacion del camarero`;
        return respuesta;
    }

  async obtenerHorarioCamarero ( nombre:string ) : Promise<string> {
        const respuesta:string = `Informacion del horario del camarero`;
        return respuesta;
    }

  async obtenerPuestoDelCamarero (nombre:string) : Promise<string> {
        const respuesta:string = `Informacion del puesto del camarero`;
        return respuesta;
    }

     async obtenerFuncionesDelCamarero (nombre:string) : Promise<string> {
        const respuesta:string = `Informacion de las funciones del camarero`;
        return respuesta;
    }

}
  
