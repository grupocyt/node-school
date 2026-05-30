export class recursosHumanosController {

    async añadirEmpleado (nombre:string ): Promise<string> {
        const respuesta:string = `Añadir un empleado nuevo ${nombre}`;
        return respuesta;
    }

    async obtenerDatosEmpleado (nombre:string): Promise<string> {
        const respuesta:string = `Horario del autobus ${nombre}`;
        return respuesta;
    }

    async modificarDatosEmpleado (nombre:string): Promise<string> {
        const respuesta:string = `Modificar datos ${nombre}`;
        return respuesta;
    }

    async eliminarEmpleado (nombre:string): Promise<string> {
        const respuesta:string = `Informacion del estado del autobus ${nombre}`;
        return respuesta;
    }

    async nominaEmpleado (nombre:string): Promise<string> {
        const respuesta:string = `Consultar nomina del empleado ${nombre}`;
        return respuesta;
    }

}
  
