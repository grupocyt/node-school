import { Request, Response, Router } from 'express';
import { MecanicaApi } from './mecanica.api';

const mecanica = Router()

const api = new MecanicaApi()

mecanica.get('/ObtenerInfoTallerFunction',         (req:Request, res:Response) => api.obtenerInfoTaller(req,res))
mecanica.get(`/obtenerinfoduenotaller`,            (req:Request, res:Response) => api.obtenerInfoDuenoTaller(req,res))
mecanica.get(`/obtenerlocalizquierdo`,             (req:Request, res:Response) => api.obtenerLocalIzquierdo(req,res))
mecanica.get(`/obtenerlocalderecho`,               (req:Request, res:Response) => api.obtenerLocalDerecho(req,res))
mecanica.get(`/obtenercolordeltaller`,             (req:Request, res:Response) => api.obtenerColorDelTaller(req,res))

export default mecanica