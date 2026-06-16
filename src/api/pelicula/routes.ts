import { Router } from 'express';
import { obtenercalificacionedad, ObtenerInfoPelicula, ObtenerPrecioPelicula, ObtenerSinopsisPelicula,} from './pelicula.api';
 

const pelicula = Router()

pelicula.get('/ObtenerInfopeliculaFunction',                  ObtenerInfoPelicula)
pelicula.get('/ObtenerSinopsisPeliculaFunction',              ObtenerSinopsisPelicula)
pelicula.get('/ObtenerPrecioPeliculaFunction',                ObtenerPrecioPelicula)
pelicula.get('/ObtenerCalificacionFunction',                  obtenercalificacionedad)

export default pelicula