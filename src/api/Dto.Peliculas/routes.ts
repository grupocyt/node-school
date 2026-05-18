import { Router } from 'express';
import { obtenercalificacionedad, obtenerinfopelicula, obtenerpreciopelicula, obtenersinopsispelicula } from './Peliculas.api';
 

const peliculas = Router()

peliculas.get('/obtenerinfopeliculafunction',                  obtenerinfopelicula)
peliculas.get('/obtenersinopsispeliculafunction',              obtenersinopsispelicula)
peliculas.get('/obtenerpreciopeliculafunction',                obtenerpreciopelicula)
peliculas.get('/obtenercalificacionfunction',                  obtenercalificacionedad)

export default peliculas