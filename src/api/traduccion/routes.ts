import { Request, Response, Router } from 'express';
import { traduccionApi } from './traduccion.api';
 
const traduccion = Router()

const api = new traduccionApi()

traduccion.get('/Autobus',                              (req:Request, res:Response) => api.holaTraduccion(req,res))
traduccion.get('/Autobus',                              (req:Request, res:Response) => api.comoEstasTraduccion(req,res))
traduccion.get('/Autobus',                              (req:Request, res:Response) => api.queEdadTienesTraduccion(req,res))
traduccion.get('/Autobus',                              (req:Request, res:Response) => api.estasLocoTraduccion(req,res))

export default traduccion