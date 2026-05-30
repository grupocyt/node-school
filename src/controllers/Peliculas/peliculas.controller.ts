export class peliculasController {

    async obtenerNombrePelicula (nombre:string) : Promise<string> {
        const respuesta:string = 'Seleccion de pelicula';
        return respuesta;
    }

    async obtenerSinopsisPelicula (nombre:string) : Promise<string> {
        const respuesta:string = "sinopsis";
        return respuesta;
    }

    async obtenerPrecioPelicula (nombre:string) : Promise<string> {
        const respuesta:string = "precio de la pelicula";
        return respuesta;
    }

    async obtenerCalificacionEdad (nombre:string) : Promise<string> {
        const respuesta:string = "obtener edad recomendada";
        return respuesta;
    }
    
}