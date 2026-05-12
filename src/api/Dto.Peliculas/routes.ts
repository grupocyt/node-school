import { Router } from 'express';
import { obtenerinfopelicula, obtenersinopsispelicula, obtenerpreciopelicula, obtenercalificacionedad, obtenerlocalizquierdo } from './mecanica.api';
 

const peliculas = Router()

peliculas.get('/obtenerinfopeliculafunction',                  obtenerinfopelicula)
peliculas.get('/obtenersinopsispeliculafunction',              obtenersinopsispelicula)
peliculas.get('/obtenerpreciopeliculafunction',                obtenerpreciopelicula)
peliculas.get('/obtenercalificacionfunction',                  obtenercalificacionedad)

export default peliculas