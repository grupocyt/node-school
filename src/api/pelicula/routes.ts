import { Request, Response, Router } from 'express';
import { peliculasApi } from './pelicula.api';

const pelicula = Router()

const api = new peliculasApi()

pelicula.get('/NombrePelicula',                 (req:Request, res:Response) => api.obtenerNombrePelicula(req,res))
pelicula.get('/Sinopsis',                       (req:Request, res:Response) => api.otenerSinopsisPelicula(req,res))
pelicula.get('/PrecioPelicula',                 (req:Request, res:Response) => api.otenerPrecioPelicula(req,res))
pelicula.get('/Edad',                           (req:Request, res:Response) => api.obtenercalificacionedad(req,res))

export default pelicula