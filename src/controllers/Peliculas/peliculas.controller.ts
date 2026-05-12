export class peliculasController {

    async obtenerinfopelicula () : Promise<string> {
        const respuesta:string = 'Informacion de la pelicula';
        return respuesta;
    }

    async obtenersinopsispelicula () : Promise<string> {
        const respuesta:string = "sinopsis";
        return respuesta;
    }

    async obtenerpreciopelicula () : Promise<string> {
        const respuesta:string = "precio de la pelicula";
        return respuesta;
    }

    async obtenercalificacionedad () : Promise<string> {
        const respuesta:string = "obtener edad recomendada";
        return respuesta;
    }
    
}