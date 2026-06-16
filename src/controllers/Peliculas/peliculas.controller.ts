export class peliculasController {

    async obtenerinfopelicula () : Promise<string> {
        const respuesta:string = 'Informacion de la pelicula';
        return respuesta;
    }

    async ObtenerSinopsisPelicula () : Promise<string> {
        const respuesta:string = "sinopsis";
        return respuesta;
    }

    async ObtenerPrecioPelicula () : Promise<string> {
        const respuesta:string = "precio de la pelicula";
        return respuesta;
    }

    async ObtenerCalificacionEdad () : Promise<string> {
        const respuesta:string = "obtener edad recomendada";
        return respuesta;
    }
    
}