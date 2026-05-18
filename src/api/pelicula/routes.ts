import { Router } from 'express';
import { obtenercalificacionedad, obtenerinfopelicula, obtenerpreciopelicula, obtenersinopsispelicula } from './pelicula.api';
 

const pelicula = Router()

pelicula.get('/obtenerinfopeliculafunction',                  obtenerinfopelicula)
pelicula.get('/obtenersinopsispeliculafunction',              obtenersinopsispelicula)
pelicula.get('/obtenerpreciopeliculafunction',                obtenerpreciopelicula)
pelicula.get('/obtenercalificacionfunction',                  obtenercalificacionedad)

export default pelicula