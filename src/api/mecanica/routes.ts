import { Router } from 'express';
import { obtenercolordeltaller, obtenerinfoduenotaller, ObtenerInfoTallerFunction, obtenerlocalderecho, obtenerlocalizquierdo } from './mecanica.api';
 

const mecanica = Router()

mecanica.get('/ObtenerInfoTallerFunction',           ObtenerInfoTallerFunction)
mecanica.get(`/obtenerinfoduenotaller`,              obtenerinfoduenotaller)
mecanica.get(`/obtenerlocalizquierdo`,               obtenerlocalizquierdo )
mecanica.get(`/obtenerlocalderecho`,                 obtenerlocalderecho )
mecanica.get(`/obtenercolordeltaller`,               obtenercolordeltaller)

export default mecanica