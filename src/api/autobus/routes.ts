import { Request, Response, Router } from 'express';
import { autobusApi } from './autobus.api';
 
const autobus = Router()

const api = new autobusApi()

autobus.get('/Autobus',                              (req:Request, res:Response) => api.obtenerInfoAutobus(req,res))
autobus.get('/Autobus',                              (req:Request, res:Response) => api.obtenerInfoHorarios(req,res))
autobus.get('/Autobus',                              (req:Request, res:Response) => api.obtenerInfoRecorrido(req,res))
autobus.get('/Autobus',                              (req:Request, res:Response) => api.obtenerInfoEstadoAutobus(req,res))

export default autobus