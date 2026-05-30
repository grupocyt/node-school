export class inventarioController {

    async obtenerInventario (nombre:string ): Promise<string> {
        const respuesta:string = `Obtener inventario completo ${nombre}`;
        return respuesta;
    }

    async añadirProducto (nombre:string): Promise<string> {s
        const respuesta:string = `Añadir producto al inventario ${nombre}`;
        return respuesta;
    }

    async eliminarProducto (nombre:string): Promise<string> {
        const respuesta:string = `Eliminar producto del inventario ${nombre}`;
        return respuesta;
    }

    async modificarProducto (nombre:string): Promise<string> {
        const respuesta:string = `Modificar detalles de un producto ${nombre}`;
        return respuesta;
    }

}
  
