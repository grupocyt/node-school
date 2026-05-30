import { Request, Response, Router } from 'express';
import { viajesApi } from './viaje.api';
 
const viaje = Router()

const api = new viajesApi()

viaje.get('/Autobus',                              (req:Request, res:Response) => api.despegar(req,res))
viaje.get('/Autobus',                              (req:Request, res:Response) => api.aterrizar(req,res))
viaje.get('/Autobus',                              (req:Request, res:Response) => api.escala(req,res))
viaje.get('/Autobus',                              (req:Request, res:Response) => api.retraso(req,res))

export default viaje