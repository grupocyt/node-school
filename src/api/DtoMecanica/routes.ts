import { Router } from 'express';
import { ObtenerInfoTallerFunction } from './mecanica.api';
 

const mecanica = Router()

mecanica.get('/moteros',           ObtenerInfoTallerFunction)

export default mecanica